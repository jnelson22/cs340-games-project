-- query to add new game
INSERT INTO Games (name, min_number_player, max_number_player) VALUES (:nameInput, :min_numInput, :max_numInput)

-- query to add new game category 
INSERT INTO Game_Categories (category) VALUES (:categoryInput);

-- query to add player
INSERT INTO Players (first_name, last_name) VALUES (:fnameInput, :lnameInput);

-- query to search for a player
SELECT :Players.fnameInput, :Players.lnameInput, :Games.favegameInput FROM Players
INNER JOIN Games
ON Players:favoriteGame = Games.gameID;

-- query to search for a score
SELECT :Players.full_nameInput, :gameInput FROM Scores;

-- query to add a score
INSERT INTO Scores (score) VALUES (:gameidInput, :scoreidInput, :scoreInput);

-- query to search for a game
SELECT :gameNameInput, :minPlayersInput, :maxplayersInput FROM Game;

-- query to edit a score
UPDATE Scores 
SET game=:gameinput, score=:scoreInput, playerName=:playernameInput
WHERE scoreID=:scoreIDinput;

-- query to edit a game
UPDATE Games
SET name=:naemInput, minplayers=:minplayersInput, maxplayers=:maxplayersInput
WHERE gameID=:gameIDinput;

-- query to edit a player
UPDATE Players
SET firstName=:fnameInput, lastName=:lastnameinput
WHERE playerID=:playerIDinput;

-- query to delete a player
DELETE FROM Players WHERE firstName=:fnameinput, lastName=:lnaemInput;

-- query to delete game 
DELETE FROM Games WHERE gameName=:gamenameInput;

-- query to delete score
DELETE FROM Scores WHERE score=:scoreInput;


-- query to display player and game names on the scores page
SELECT CONCAT(Players.first_name, ' ', Players.last_name) AS player_name,  Games.name as game_name, Scores.score
FROM Players
JOIN Scores on Players.playerID = Scores.playerID
JOIN Games on Games.gameID = Scores.gameID
