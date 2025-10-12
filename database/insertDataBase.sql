--Les requêtes s'exécute dans cette base de donnée
USE plateforme_artisan

--Alimentation table Categorie
INSERT INTO Categorie (nom) VALUES
('Bâtiment'),
('Services'),
('Fabrication'),
('Alimentation')
ON DUPLICATE KEY UPDATE nom = VALUES(nom);

--Alimentation table Artisan
INSERT INTO Artisan (nom, specialite, localisation, note_moyenne, image, description, email, site_web, categorie_id)
VALUES

('Orville Salmons', 'Chauffagiste', 'Evian', 5, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'o-salmons@live.com', 
 NULL, 1),

('Mont Blanc Eléctricité', 'Electricien', 'Chamonix', 4.5, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem,id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'contact@mont-blanc-electricite.com', 
 'https://mont-blanc-electricite.com', 1),
 
 ('Boutot & Fils', 'Menuisier', 'Bourg-en-Bresse', 4.7, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'boutot-menuiserie@gmail.com', 
 'https://boutot-menuiserie.com', 1),

('Vallis Bellemare', 'Plombier', 'Vienne', 4, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'v.bellemare@gmail.com', 
 'https://plomberie-bellemare.com', 1),
 
-- Service
('Royden Charbonneau', 'Coiffeur', 'Saint-Priest', 3.8, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem,id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'r.charbonneau@gmail.com', 
 NULL, 2),
 
 ('Leala Dennis', 'Coiffeur', 'Chambéry', 3.8, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'l.dennos@hotmail.fr', 
 'https://coiffure-leala-chambery.fr', 2),
 
 ('C''est sup''hair', 'Coiffeur', 'Romans-sur-Isère', 4.1, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'sup-hair@gmail.com', 
 'https://sup-hair.fr', 2),
 
 ('Le monde des fleurs', 'fleuriste', 'Annonay', 4.6, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem,id volutpat massa fermentum nec. 
  Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
  'contact@le-monde-des-fleurs-annonay.fr', 
  'https://le-monde-des-fleurs-annonay.fr', 2),
 
 ('Valérie Laderoute', 'Toiletteur', 'Valence', 4.5, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'v-laredoute@gmail.com', 
 NULL, 2),
 
 -- Fabrication
 ('Claude Quinn', 'Bijoutier', 'Aix-les-Bains', 4.2, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'claude.quinn@gmail.com', 
 NULL, 3),
 
 ('Amitee Lécuyer', 'Couturier', 'Annecy', 4.5, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'a.amitee@hotmail.com', 
 'https://lecuyer-couture.com', 3),
 
 ('Ernest Carignan', 'Ferronier', 'Le-Puy-en-Velay', 5, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'e-carigan@hotmail.com', 
 NULL, 3),
 
 -- Alimentation
  ('Boucherie Dumont', 'Boucher', 'Lyon', 4.5, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'boucherie.dumond@gmail.com', 
 NULL, 4),
 
 ('Au pain chaud', 'Boulangerr', 'Montélimar', 4.8, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'aupainchaud@hotmail.com', 
 NULL, 4),
 
 ('Chocolaterie Labbé', 'Chocolatier', 'Lyon', 4.9, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'chocolaterie-labbe@gmail.com', 
 'https://chocolaterie-labbe.fr', 4),
 
 ('Traiteur Truchon', 'Traiteur', 'Lyon', 4.1, NULL,
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 
 'contact@truchon-traiteur.fr', 
 'https://truchon-traiteur.fr', 4);

 --Ajout des images table artisan
 UPDATE artisan
SET image = '/assets/artisans/orville-salmons.jpg'
WHERE id = 1;

UPDATE artisan
SET image = '/assets/artisans/mont-blanc-electricite.jpg'
WHERE id = 2;

UPDATE artisan
SET image = '/assets/artisans/boutot-et-fils.jpg'
WHERE id = 3;

UPDATE artisan
SET image = '/assets/artisans/vallis-bellemare.jpg'
WHERE id = 4;

UPDATE artisan
SET image = '/assets/artisans/royden-charbonneau.jpg'
WHERE id = 5;

UPDATE artisan
SET image = '/assets/artisans/leala-dennis.jpg'
WHERE id = 6;

UPDATE artisan
SET image = '/assets/artisans/cest-sup-hair.jpg'
WHERE id = 7;

UPDATE artisan
SET image = '/assets/artisans/le-monde-des-fleurs.jpg'
WHERE id = 8;

UPDATE artisan
SET image = '/assets/artisans/valerie-laderoute.jpg'
WHERE id = 9;

UPDATE artisan
SET image = '/assets/artisans/claude-quinn.jpg'
WHERE id = 10;

UPDATE artisan
SET image = '/assets/artisans/amitee-lecuyer.jpg'
WHERE id = 11;

UPDATE artisan
SET image = '/assets/artisans/ernest-carignan.jpg'
WHERE id = 12;

UPDATE artisan
SET image = '/assets/artisans/boucherie-dumont.jpg'
WHERE id = 13;

UPDATE artisan
SET image = '/assets/artisans/au-pain-chaud.jpg'
WHERE id = 14;

UPDATE artisan
SET image = '/assets/artisans/chocolaterie-labbe.jpg'
WHERE id = 15;

UPDATE artisan
SET image = '/assets/artisans/traiteur-truchon.jpg'
WHERE id = 16;