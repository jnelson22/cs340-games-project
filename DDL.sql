SET FOREIGN KEY CHECKS=0;

DROP TABLE IF EXISTS `Games`;
DROP TABLE IF EXISTS `Players`;
DROP TABLE IF EXISTS `Scores`;
DROP TABLE IF EXISTS `Game_Categories`;
DROP TABLE IF EXISTS `Games_Game_Categories`;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `Games` (
  `gameID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `min_number_player` int DEFAULT NULL,
  `max_number_player` int DEFAULT NULL,
  PRIMARY KEY (`gameID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `Game_Categories` (
    `game_categoryID` int(11) AUTO_INCREMENT UNIQUE NOT NULL,
    category varchar(255) UNIQUE NOT NULL,
    PRIMARY KEY (`game_categoryID`)
)

CREATE TABLE `Players` (
    `playerID` int(11) AUTO_INCREMENT UNIQUE NOT NULL,
    `first_name` varchar(100) NOT NULL,
    `last_name` varchar(100) NOT NULL,
    `favorite_game` varchar(100),
    CONSTRAINT fave_game FOREIGN KEY (`favorite_game`) REFERENCES Games(`GameID`),
    PRIMARY KEY (`playerID`)
)

CREATE TABLE `Scores` (
    `scoreID` int(11) AUTO_INCREMENT UNIQUE NOT NULL,
    `playerID` int(11) NOT NULL,
    `gameID` int(11) NOT NULL,
    `score` float(24),
    PRIMARY KEY (`scoreID`),
    CONSTRAINT score_game FOREIGN KEY (`gameID`) REFERENCES Games(`gameID`),
    CONSTRAINT score_player FOREIGN KEY (`playerID`) REFERENCES Players(`playerID`)
)

CREATE TABLE `Games_Game_Categories` (
    `gameID` int(11) NOT NULL,
    `categoryID` int(11) NOT NULL,
    CONSTRAINT FK_game_id
    FOREIGN KEY (`gameID`) REFERENCES Game(gameID),
    CONSTRAINT FK_categoryID 
    FOREIGN KEY (`categoryID`) REFERENCES Game_Category(`categoryID`)
)


INSERT INTO Games (game_name, min_number_players, max_number_players) VALUES ('Risk', 2, 6);
INSERT INTO Games (game_name, min_number_players, max_number_players) VALUES ('Checkers', 2, 2);
INSERT INTO Games (game_name, min_number_players, max_number_players) VALUES ('Catan', 2, 6);

INSERT INTO Game_Categories (category) VALUES ('Role-playing');
INSERT INTO Game_Categories (category) VALUES ('strategy');
INSERT INTO Game_Categories (category) VALUES ('dice');
INSERT INTO Game_Categories (category) VALUES ('board');

