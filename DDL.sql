CREATE TABLE `Games` (
  `gameID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `min_number_player` int DEFAULT NULL,
  `max_number_player` int DEFAULT NULL,
  PRIMARY KEY (`gameID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

