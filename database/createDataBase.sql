--Création de la base de données plateforme_artisan
CREATE DATABASE IF NOT EXISTS plateforme_artisan;

-- Création de l'utilisateur et du mot de passe 
CREATE USER IF NOT EXISTS 'cef_eleve'@'localhost' IDENTIFIED BY 'Devoir8.';
GRANT ALL PRIVILEGES ON plateforme_artisan.* TO 'cef_eleve'@'localhost';
FLUSH PRIVILEGES;

--Création de la table catégorie
CREATE TABLE IF NOT EXISTS Categorie 
( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(100) NOT NULL, 
UNIQUE KEY uq_categorie_nom (nom) ) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Création de la table Artisan 
CREATE TABLE IF NOT EXISTS Artisan 
( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
nom VARCHAR(150) NOT NULL, 
specialite VARCHAR(150) NOT NULL, 
localisation VARCHAR(150) NOT NULL, 
note_moyenne DECIMAL(2,1) NOT NULL DEFAULT 0.0,  
image VARCHAR(255) NULL, 
description TEXT NULL, 
email         VARCHAR(150) NOT NULL,
site_web VARCHAR(255) NULL, categorie_id INT UNSIGNED NOT NULL, 
CONSTRAINT fk_artisan_categorie FOREIGN KEY (categorie_id) 
REFERENCES Categorie(id) ON UPDATE CASCADE ON DELETE RESTRICT, 
INDEX idx_artisan_nom (nom), INDEX idx_artisan_categorie (categorie_id), 
INDEX idx_artisan_localisation (localisation) ) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Création de la table Messages de contact
CREATE TABLE IF NOT EXISTS MessageContact 
( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
nom VARCHAR(150) NOT NULL, 
email VARCHAR(150) NOT NULL, 
objet VARCHAR(200) NOT NULL, message TEXT NOT NULL, 
artisan_id INT UNSIGNED NOT NULL, 
CONSTRAINT fk_contact_artisan FOREIGN KEY (artisan_id) 
REFERENCES Artisan(id) ON UPDATE CASCADE ON DELETE CASCADE, 
INDEX idx_contact_artisan (artisan_id), INDEX idx_contact_email (email) ) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Une table Note a été prévue pour permettre de gérer des notes multiples par artisan dans une évolution future du projet
--Création de la table Note
CREATE TABLE IF NOT EXISTS Note 
( id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
valeur TINYINT UNSIGNED NOT NULL, 
artisan_id INT UNSIGNED NOT NULL,
CONSTRAINT fk_note_artisan FOREIGN KEY (artisan_id) 
REFERENCES Artisan(id) ON UPDATE CASCADE ON DELETE CASCADE, 
INDEX idx_note_artisan (artisan_id) ) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Créationd de triggers pour la mise à jour de la moyenne des notes pour chacun des artisants
CREATE TRIGGER trg_note_ai
AFTER INSERT ON note
FOR EACH ROW
BEGIN
  UPDATE artisan
  SET note_moyenne = COALESCE((
    SELECT ROUND(AVG(valeur), 1)
    FROM note
    WHERE artisan_id = NEW.artisan_id
  ), 0.0)
  WHERE id = NEW.artisan_id;
END$$

CREATE TRIGGER trg_note_au
AFTER UPDATE ON note
FOR EACH ROW
BEGIN
  UPDATE artisan
  SET note_moyenne = COALESCE((
    SELECT ROUND(AVG(valeur), 1)
    FROM note
    WHERE artisan_id = NEW.artisan_id
  ), 0.0)
  WHERE id = NEW.artisan_id;
END$$

CREATE TRIGGER trg_note_ad
AFTER DELETE ON note
FOR EACH ROW
BEGIN
  UPDATE artisan
  SET note_moyenne = COALESCE((
    SELECT ROUND(AVG(valeur), 1)
    FROM note
    WHERE artisan_id = OLD.artisan_id
  ), 0.0)
  WHERE id = OLD.artisan_id;
END$$