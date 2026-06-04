INSERT INTO equipos (id, escudo_url, estadio, fundacion, liga, nombre, pais, goles_contra, goles_favor, puntos)
VALUES

(1,'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/250px-FC_Barcelona_%28crest%29.svg.png','Camp Nou',1899,'LaLiga','FC Barcelona','España',31,91,91),
(2,'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg','Bernabéu',1902,'LaLiga','Real Madrid','España',33,70,77),
(3,'https://tmssl.akamaized.net//images/wappen/head/1050.png?lm=1408655310','La Cerámica',1923,'LaLiga','Villarreal','España',40,65,69),
(4,'https://tmssl.akamaized.net//images/wappen/head/13.png?lm=1719915566','Metropolitano',1903,'LaLiga','Atlético Madrid','España',39,60,66),

(5,'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/250px-Real_betis_logo.svg.png','Benito Villamarín',1907,'LaLiga','Real Betis','España',44,56,57),
(6,'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/960px-RC_Celta_de_Vigo_logo.svg.png','Balaídos',1923,'LaLiga','Celta','España',47,51,50),

(7,'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1280px-Getafe_logo.svg.png','Coliseum',1983,'LaLiga','Getafe','España',36,28,45),
(8,'https://tmssl.akamaized.net//images/wappen/head/681.png?lm=1614795530','Reale Arena',1909,'LaLiga','Real Sociedad','España',55,54,44),

(9,'https://tmssl.akamaized.net//images/wappen/head/621.png?lm=1695069038','San Mamés',1898,'LaLiga','Athletic Club','España',51,40,44),
(10,'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Rayo_Vallecano_logo.svg/1280px-Rayo_Vallecano_logo.svg.png','Vallecas',1924,'LaLiga','Rayo Vallecano','España',42,36,43),

(11,'https://upload.wikimedia.org/wikipedia/en/thumb/3/38/CA_Osasuna_2024_crest.svg/960px-CA_Osasuna_2024_crest.svg.png','El Sadar',1920,'LaLiga','Osasuna','España',47,43,42),
(12,'https://tmssl.akamaized.net//images/wappen/head/1049.png?lm=1406966320','Mestalla',1919,'LaLiga','Valencia','España',50,38,42),

(13,'https://tmssl.akamaized.net//images/wappen/head/368.png?lm=1730896593','Ramón Sánchez Pizjuán',1890,'LaLiga','Sevilla','España',56,43,40),
(14,'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Elche_CF_logo.svg/1280px-Elche_CF_logo.svg.png','Martínez Valero',1923,'LaLiga','Elche','España',56,47,39),

(15,'https://tmssl.akamaized.net//images/wappen/head/237.png?lm=1407484750','Son Moix',1916,'LaLiga','Mallorca','España',52,43,39),
(16,'https://tmssl.akamaized.net//images/wappen/head/3368.png?lm=1408655062','Ciutat de València',1909,'LaLiga','Levante','España',59,44,39),

(17,'https://tmssl.akamaized.net//images/wappen/head/714.png?lm=1406966369','RCDE Stadium',1900,'LaLiga','Espanyol','España',53,38,39),
(18,'https://tmssl.akamaized.net//images/wappen/head/12321.png?lm=1730455718','Montilivi',1930,'LaLiga','Girona','España',52,37,39),

(19,'https://tmssl.akamaized.net//images/wappen/big/1108.png?lm=1596131395','Mendizorroza',1921,'LaLiga','Alavés','España',54,41,37),
(20,'https://tmssl.akamaized.net//images/wappen/head/2497.png?lm=1417193316','Carlos Tartiere',1926,'LaLiga','Real Oviedo','España',54,26,29);




-- JUGADORES LALIGA (20 equipos x 3 jugadores)


INSERT INTO jugadores
(apellido1, asistencias, edad, estatura, foto_url, goles, nacionalidad, nombre, peso, posicion, valor_mercado, equipo_id)
VALUES

-- =========================
-- FC Barcelona (1)
-- =========================
('Yamal',16,18,1.80,'https://assets.laliga.com/squad/2025/t178/p593109/2048x2225/p593109_t178_2025_1_001_000.png',14,'España','Lamine',70,'ED',200,1),
('González',12,23,1.74,'https://assets.laliga.com/squad/2025/t178/p490541/2048x2048/p490541_t178_2025_1_002_000.jpg',8,'España','Pedri',68,'MC',150,1),
('Araújo',2,27,1.88,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW2FrP_hkUrprlQtfil9bpSr86WGEPWaQ1g&s',3,'Uruguay','Ronald',79,'DFC',20,1),

-- =========================
-- Real Madrid (2)
-- =========================
('Mbappé',10,27,1.78,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pbKT8RpoSUGqHQ-X4cK9bZLAuKxnkliiJw&s',35,'Francia','Kylian',73,'DC',200,2),
('Bellingham',8,22,1.86,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNGpG6VAcvqj66CMZko7sJ-FSY_GBwdkeSQ&s',19,'Inglaterra','Jude',75,'MC',140,2),
('Júnior',11,25,1.76,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMr7EV2LLSkXk_nlc1-85h6-za7an5R4NasQ&s',21,'Brasil','Vinicius',73,'EI',150,2),

-- =========================
-- Villarreal (3)
-- =========================
('Gueye',5,27,1.87,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxUW66Hp8XiQotLYjnHUzZpnasQdCPygoRQ&s',4,'Senegal','Pape',80,'MC',40,3),
('Moleiro',7,22,1.75,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTm0r_f-JTiBZET1Td7hjzGnyjyFK1s0tiw&s',6,'España','Alberto',68,'EI',40,3),
('Mikautadze',6,25,1.76,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIgoelTmybdPsSfrfzigUJldyBAT9K3dvzg&s',12,'Georgia','Georges',72,'DC',28,3),

-- =========================
-- Atlético Madrid (4)
-- =========================
('Álvarez',5,26,1.70,'https://assets.laliga.com/squad/2025/t175/p461358/2048x2225/p461358_t175_2025_1_001_000.png',18,'Argentina','Julián',71,'DC',90,4),
('Griezmann',9,35,1.76,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1H6yrgB21aBV6EdCKKLZi9jtv8L_0Ub5tcw&s',20,'Francia','Antoine',73,'MCO',10,4),
('Llorente',7,31,1.84,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBeEGDJrrtBOo2X2apD-kp8L4RKhb6HPYHg&s',7,'España','Marcos',74,'MC',22,4),

-- =========================
-- Real Betis (5)
-- =========================
('', 10, 26, 1.74, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0iGHONHYtAwS7dSRdc0MhwCiRP5sNackNQ&s', 12, 'Brasil', 'Antony', 69, 'ED', 40, 5),
('Ezzalzouli', 9, 24, 1.76, 'https://assets.laliga.com/squad/2025/t185/p500745/2048x2225/p500745_t185_2025_1_001_000.png', 8, 'Marruecos', 'Abde', 68, 'EI', 30, 5),
('Natan', 4, 25, 1.88, 'https://assets.laliga.com/squad/2025/t185/p448085/2048x2225/p448085_t185_2025_1_001_000.png', 3, 'Brasil', 'Natan', 78, 'DFC', 25, 5),

-- =========================
-- Celta (6)
-- =========================
('Mingueza', 6, 27, 1.79, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiI6mTF3CBQ1sXfJ6zEw9EWe9-ksxh1FWi_g&s', 2, 'España', 'Óscar', 72, 'LD', 18, 6),
('López', 7, 21, 1.80, 'https://assets.laliga.com/squad/2025/t176/p643135/2048x2048/p643135_t176_2025_1_002_000.jpg', 5, 'España', 'Fer', 70, 'MCO', 16, 6),
('Swedberg', 4, 22, 1.83, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMK2FN0MO7YitM2doIv40AKAyHH3sFWnIgg&s', 6, 'Suecia', 'Williot', 74, 'EI', 15, 6),

-- =========================
-- Getafe (7)
-- =========================
('Arambarri', 3, 30, 1.78, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK18zTAABW0hyavHD7nwjPf6h6BnXtwy848g&s', 4, 'Uruguay', 'Mauro', 73, 'MC', 10, 7),
('Martín', 5, 22, 1.80, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkh_Kv0LEtwBOri6_vOPoD9YQnnhRoHtiobA&s', 2, 'España', 'Mario', 75, 'PIV', 10, 7),
('Mayoral', 4, 29, 1.82, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-1X8mMv1qMQUPt1PiEsDeoSbs7vekMKbqQ&s', 16, 'España', 'Borja', 74, 'DC', 7, 7),

-- =========================
-- Real Sociedad (8)
-- =========================
('Kubo', 9, 24, 1.73, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVBZUB67gONgkfr88wRH7ZMZDUKNDavXasA&s', 13, 'Japón', 'Takefusa', 67, 'ED', 30, 8),
('Oyarzabal', 7, 29, 1.81, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinwthF9E8arqjS6blJ8P-mm2ciykwjEbAuA&s', 10, 'España', 'Mikel', 70, 'DC', 25, 8),
('Gorrotxategi', 3, 24, 1.80, 'https://assets.laliga.com/squad/2025/t188/p546812/2048x2048/p546812_t188_2025_1_002_000.jpg', 2, 'España', 'Jon', 75, 'PIV', 25, 8),

-- =========================
-- Athletic Club (9)
-- =========================
('Williams', 10, 23, 1.81, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKrR-DftylfcaW4Epgv4gpjm00fcDuYw_6g&s', 9, 'España', 'Nico', 70, 'EI', 50, 9),
('Sancet', 8, 26, 1.84, 'https://assets.laliga.com/squad/2025/t174/p439772/1024x1024/p439772_t174_2025_1_002_000.jpg', 11, 'España', 'Oihan', 74, 'MCO', 35, 9),
('Jauregizar', 4, 22, 1.80, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdI7YQs25uRB_bZng8b17c77F2kLwi79nIyg&s', 2, 'España', 'Mikel', 72, 'MC', 35, 9),

-- =========================
-- Rayo Vallecano (10)
-- =========================
('De Frutos',4,29,1.80,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42ERHTDJ-qJEF3rXkpbOZggRgLPiYcyjjuw&s',6,'España','Jorge',72,'ED',12,10),
('Camello',3,24,1.79,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1pS6Va-MtUMViS8cgpllei8pDgPW1DoDSg&s',8,'España','Sergio',70,'DC',8,10),
('Palazón',8,30,1.69,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9YbDnqFDW3u130iAXkmi1agganJ57NG5dg&s',9,'España','Isi',68,'ED',6,10),

-- =========================
-- Osasuna (11)
-- =========================
('Budimir',3,33,1.90,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnf0i9NAnGesSxbaQnX4lqCNI6-pazO6ryjg&s',18,'Croacia','Ante',78,'DC',7,11),
('Oroz',5,24,1.80,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F4uYAT_wDSxWp9fY8Uh7aW1kU2eu5POy4A&s',6,'España','Aimar',70,'MC',9,11),
('Catena',2,30,1.85,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgzjlqcoJ40LNjsGFnbqTpDxl-I53vbh_hg&s',2,'España','David',82,'DFC',5,11),

-- =========================
-- Valencia (12)
-- =========================
('Duro',4,26,1.80,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq04ZD_6ZgbyF7pNCJqhW_UYghOovJOo-DCw&s',10,'España','Hugo',75,'DC',12,12),
('Pepelu',6,27,1.82,'https://assets.laliga.com/squad/2025/t191/p220191/2048x2225/p220191_t191_2025_1_001_000.png',3,'España','José',74,'MC',9,12),
('López',5,24,1.78,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLozblYtmF0iG-RpEoT84v_LFAKyuecXHnw&s',7,'España','Diego',70,'ED',12,12),

-- =========================
-- Sevilla (13)
-- =========================
('Sánchez', 6, 22, 1.78, 'https://assets.laliga.com/squad/2025/t179/p494928/2048x2048/p494928_t179_2025_1_002_000.jpg', 3, 'España', 'Juanlu', 70, 'LD', 15, 13),
('Vargas', 5, 27, 1.78, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSWSdJJRqaw4j509nJhnHRw97hM2yXtDq_g&s', 4, 'Suiza', 'Rubén', 72, 'EI', 12, 13),
('Agoumé', 4, 24, 1.87, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcP0z5l5vK5DwdAxHMjcaxzGbRYzeCjG2Gw&s', 2, 'Francia', 'Lucien', 74, 'PIV', 12, 13),

-- =========================
-- Elche (14)
-- =========================
('Fort', 4, 19, 1.78, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfL7f7W0P4X676lfVEIRhlbHBDNUd5BRZsg&s', 1, 'España', 'Héctor', 70, 'LD', 12, 14),
('Affengruber', 3, 25, 1.86, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQW4qkDoiC35WkrwJt2Teaslx5pS0CBH4_Q&s', 0, 'Austria', 'David', 78, 'DFC', 9, 14),
('Valera', 5, 24, 1.75, 'https://assets.laliga.com/squad/2025/t954/p467020/2048x2048/p467020_t954_2025_1_002_000.jpg', 6, 'España', 'Germán', 72, 'EI', 6, 14),

-- =========================
-- Mallorca (15)
-- =========================
('Costa', 5, 25, 1.83, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVkkY8A66k5PT_HV0OgVTOfjGNZL6ySZoFw&s', 3, 'Portugal', 'Samú', 76, 'MC', 15, 15),
('Virgili', 4, 19, 1.78, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpMNnBZuwFuAzy1cu91lApJgR1HYNuH3SsA&s', 6, 'España', 'Jan', 70, 'EI', 15, 15),
('Román', 0, 25, 1.90, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_c7EGOamGP9nGKiMX9O2eGMHMvtWWfqRtA&s', 0, 'España', 'Leo', 82, 'POR', 6, 15),

-- =========================
-- Levante (16)
-- =========================
('Etta Eyong', 5, 22, 1.86, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxxiD74XZKcJVA1mQeH_VMGqqC-zqqGfNYQ&s', 9, 'Camerún', 'Karl', 78, 'DC', 18, 16),
('Álvarez', 7, 22, 1.78, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1p0XnIgyNNSMWinjoxhEcE4Kg4HnLR7hteg&s', 6, 'España', 'Carlos', 72, 'MCO', 15, 16),
('Romero', 4, 25, 1.80, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnAxn6ZSX7XFsk-kRvgAFlt2mhowDdXZUKw&s', 7, 'España', 'Iván', 74, 'DC', 7, 16),

-- =========================
-- Espanyol (17)
-- =========================
('Romero', 3, 24, 1.78, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k91pj3jS55qxxzgaJV28WU5IMAdsXWhORw&s', 2, 'España', 'Carlos', 72, 'LI', 25, 17),
('El Hilali', 4, 22, 1.80, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROW6kmYQarKaB0VnJaXGUDT8P6Qz9ZmItB5Q&s', 1, 'Marruecos', 'Omar', 70, 'LD', 15, 17),
('González de Zárate', 2, 25, 1.82, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJi8JA_pJVmpcOiR-oOWhtr1urPfGaUwNUkw&s', 0, 'España', 'Urko', 74, 'MC', 10, 17),

-- =========================
-- Girona (18)
-- =========================
('Vanat',6,24,1.84,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcIRvg6v22ndsEJ7_CWSB3skWgz4To51pLA&s',15,'Ucrania','Vladyslav',78,'DC',15,18),
('Tsygankov',7,28,1.78,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_4WlW19lmQ0cx2kcFKvBw_7KLT3oBcWEEg&s',10,'Ucrania','Viktor',74,'ED',15,18),
('Reis',3,20,1.86,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTldbqFToNCYH21Jmemo2IRhMLkrUkCmOnw&s',1,'Brasil','Vitor',78,'DFC',30,18),

-- =========================
-- Alavés (19)
-- =========================
('Blanco',5,25,1.78,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF9ULF4RowM3-bELcELqtAaSE6vz1Uinkrg&s',3,'España','Antonio',74,'MC',10,19),
('Sivera',0,29,1.89,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXS2zh-iULJnlVO-K24LHQtXEy6ajbZYJIw&s',0,'España','Antonio',82,'POR',6,19),
('Pacheco',2,25,1.85,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qYS5dcd_9LU15fEyp63HvClkmuBLMoOyFA&s',1,'España','Jon',78,'DFC',6,19),

-- =========================
-- Real Oviedo (20)
-- =========================
('Carmo',3,26,1.88,'https://statics-maker.llt-services.com/ovi/images/2025/08/30/original/41285f87-5c31-4122-a7da-2d592f0ae51b-302.jpg',1,'Angola','David',82,'DFC',8,20),
('López',4,24,1.80,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWefejsKIhb-_AXx5IIss94RibQe3_jKmWqg&s',2,'España','Javi',74,'LI',5,20),
('Fernández',5,22,1.78,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTTizj8DCEyWyn9qSFmGKPBSBxnXso79vSQ&s',4,'Argentina','Thiago',72,'EI',4,20);