

USE cs340_swartsm;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `Games_Game_Categories`;
DROP TABLE IF EXISTS `Scores`;
DROP TABLE IF EXISTS `Game_Categories`;
DROP TABLE IF EXISTS `Players`;
DROP TABLE IF EXISTS `Games`;

SET FOREIGN_KEY_CHECKS = 1;



CREATE TABLE `Games` (
  `gameID` int(11) AUTO_INCREMENT NOT NULL,
  `name` varchar(100) NOT NULL,
  `min_number_player` int DEFAULT NULL,
  `max_number_player` int DEFAULT NULL,
  PRIMARY KEY (`gameID`)
);

CREATE TABLE `Game_Categories` (
    `game_categoryID` int(11) AUTO_INCREMENT NOT NULL,
    `category` varchar(255) UNIQUE NOT NULL,
    PRIMARY KEY (`game_categoryID`)
);

CREATE TABLE `Players` (
    `playerID` int(11) AUTO_INCREMENT NOT NULL,
    `first_name` varchar(100) NOT NULL,
    `last_name` varchar(100) NOT NULL,
    `favorite_game` int(11),
    CONSTRAINT full_name UNIQUE (`first_name`, `last_name`),
    PRIMARY KEY (`playerID`)
);

CREATE TABLE `Scores` (
    `scoreID` int(11) AUTO_INCREMENT NOT NULL,
    `playerID` int(11) NOT NULL,
    `gameID` int(11) NOT NULL,
    `score` float(24),
    PRIMARY KEY (`scoreID`)
);

CREATE TABLE `Games_Game_Categories` (
    `gameID` int(11) NOT NULL,
    `categoryID` int(11) NOT NULL
);

ALTER TABLE `Players`
    ADD CONSTRAINT `fave_game` 
        FOREIGN KEY (`favorite_game`) REFERENCES `Games` (`gameID`)
        ON DELETE CASCADE 
        ON UPDATE CASCADE;

ALTER TABLE `Scores` 
    ADD CONSTRAINT `score_game` 
        FOREIGN KEY (`gameID`) REFERENCES `Games` (`gameID`)
        ON DELETE CASCADE 
        ON UPDATE CASCADE;

ALTER TABLE `Scores` 
    ADD CONSTRAINT `score_player` 
        FOREIGN KEY (`playerID`) REFERENCES `Players` (`playerID`)
        ON DELETE CASCADE 
        ON UPDATE CASCADE;


ALTER TABLE `Games_Game_Categories`
    ADD CONSTRAINT `FK_game_id`
        FOREIGN KEY (`gameID`) REFERENCES `Games` (`gameID`)
        ON DELETE CASCADE 
        ON UPDATE CASCADE;

ALTER TABLE `Games_Game_Categories`
    ADD CONSTRAINT `FK_category_id`
        FOREIGN KEY (`categoryID`) REFERENCES `Game_Categories` (`game_categoryID`)
        ON DELETE CASCADE 
        ON UPDATE CASCADE;

INSERT INTO Games (name, min_number_player, max_number_player) VALUES ('Risk', 2, 6);
INSERT INTO Games (name, min_number_player, max_number_player) VALUES ('Checkers', 2, 2);
INSERT INTO Games (name, min_number_player, max_number_player) VALUES ('Catan', 2, 6);

INSERT INTO Game_Categories (category) VALUES ('Role-playing');
INSERT INTO Game_Categories (category) VALUES ('strategy');
INSERT INTO Game_Categories (category) VALUES ('dice');
INSERT INTO Game_Categories (category) VALUES ('board');

INSERT INTO Players (first_name, last_name) VALUES ('Tom', 'Smith');
INSERT INTO Players (first_name, last_name) VALUES ('LeBron', 'James');
INSERT INTO Players (first_name, last_name) VALUES ('Doris', 'Day');

INSERT INTO Scores (gameID, score, playerID) VALUES (1, 29, 1);
INSERT INTO Scores (gameID, score, playerID) VALUES (2, 100, 3);
INSERT INTO Scores (gameID, score, playerID) VALUES (3, 250, 2);