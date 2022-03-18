from cgi import print_exception
from crypt import methods
import json
import os
import re
from sqlite3 import paramstyle
from flask import Flask, Response, render_template, send_from_directory, request, jsonify, make_response, redirect, Request
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
from api.api_handler import GamesApiHandler
from flask import request
import database.db_connector as db

app = Flask(__name__, static_folder='games-ui/build', static_url_path='/')
cors = CORS(app)
api = Api(app)
FLASK_ENV=os.environ.get('FLASK_ENV')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

""" Games page API"""
@app.route('/api/games', methods=["POST", "GET"])
def game():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        query = "SELECT * from Games;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)
    elif request.method == 'POST':
        print(request.get_json())
        form_data = request.get_json()
        game_name = form_data['name'].capitalize()
        min_players = form_data['min_number_player']
        max_players = form_data['max_number_player']
        query = "INSERT INTO Games (name, min_number_player, max_number_player) VALUES (%s, %s, %s)"
        db.execute_query(db_connection=db_connection, query=query, query_params=(game_name, min_players, max_players))

        return Response(status=201)

@app.route('/api/games/<int:gameID>', methods=["DELETE", "PUT"])
def delete_game(gameID):
    db_connection = db.connect_to_database()
    if request.method == 'DELETE':
        query = "DELETE FROM Games WHERE gameID = %s;"
        db.execute_query(db_connection=db_connection, query=query, query_params=(gameID,))
        return Response(status=204)
    elif request.method == 'PUT':
        form_data = request.get_json()
        print("update game")
        query = "UPDATE Games SET name=%s, min_number_player=%s, max_number_player=%s WHERE gameID=%s;"
        db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['name'], form_data['min_number_player'], form_data['max_number_player'], form_data['gameID']))
        return Response(status=200)

@app.route('/api/games-fliter', methods=["POST"])
def game_search():
    db_connection = db.connect_to_database()
    if request.method == 'POST':
        print(request.get_json())
        form_data = request.get_json()
        query = "SELECT * from Games WHERE"
        q_params = 0
        for key, data in form_data.items():
            if data != '':
                if key == 'gameSerach':
                    data = data.capitalize()
                    key = 'name'
                elif key == 'gameMinPlayerSerach':
                    key = 'min_number_player'
                elif key == 'gameMaxPlayerSerach':
                    key = 'max_number_player'
                if q_params == 0:
                    query += f" {key} = '{data}'"
                    q_params += 1
                else:
                    query += f" AND {key} = '{data}'"

        if query == 'SELECT * from Games WHERE':
            query = "SELECT * from Games;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        response = app.response_class(
            response=json.dumps(results),
            status=201,
            mimetype='application/json'
        )
        return response

""" Palyers Page API """
@app.route('/api/players', methods=["POST", "GET"])
def player():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        query = """SELECT Players.playerID, Players.first_name, Players.last_name, Games.name AS favorite_game  
                    FROM Players
                    LEFT JOIN Games ON Players.favorite_game = Games.gameID;"""
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)
    elif request.method == 'POST':
        form_data = request.get_json()

        fav_game = form_data['fav_game']
        first_name = form_data['first_name'].capitalize()
        last_name = form_data['last_name'].capitalize()
        
        if fav_game == "":
            query = "INSERT INTO Players (first_name, last_name) VALUES (%s, %s);"
            db.execute_query(db_connection=db_connection, query=query, query_params=(first_name, last_name,))
        else:
            query = "INSERT INTO Players (first_name, last_name, favorite_game) VALUES (%s, %s, %s);"
            db.execute_query(db_connection=db_connection, query=query, query_params=(first_name, last_name, fav_game))
        
        return Response(status=201)

@app.route('/api/players/<int:playerID>', methods=["DELETE", "PUT"])
def delete_player(playerID):
    db_connection = db.connect_to_database()
    if request.method == 'DELETE':
        query = "DELETE FROM Players WHERE playerID = %s;"
        db.execute_query(db_connection=db_connection, query=query, query_params=(playerID,))
        return Response(status=204)
    elif request.method == 'PUT':
        form_data = request.get_json()
        print(form_data)
        query = "UPDATE Players SET first_name=%s, last_name=%s, favorite_game=%s WHERE playerID=%s;"
        db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['first_name'], form_data['last_name'], form_data['gameID'], form_data['playerID']))
        return Response(status=200)

""" Game Catigories Page API """
@app.route('/api/game-categories', methods=["POST", "GET"])
def game_cat():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        query = "SELECT * from Game_Categories;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)
    elif request.method == 'POST':
        form_data = request.get_json()
        query = "INSERT INTO Game_Categories (category) VALUES (%s);"
        print(form_data)
        print(form_data['category'])
        category_str = form_data['category'].capitalize()
        try:
            db.execute_query(db_connection=db_connection, query=query, query_params=(category_str,))
            return Response(status=201)
        except Exception as e:
            if "Duplicate entry" in e.args[1]:
                print("duplicate key")
                return Response()
            else:
                print(e)
                return Response(status=201)

@app.route('/api/game-categories/<int:game_categoryID>', methods=["DELETE"])
def delete_game_cat(game_categoryID):
    db_connection = db.connect_to_database()
    query = "DELETE FROM Game_Categories WHERE game_categoryID = %s;"
    db.execute_query(db_connection=db_connection, query=query, query_params=(game_categoryID,))
    return Response(status=204)

""" Scores page API """
@app.route('/api/scores', methods=["POST", "GET"])
def scores():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        query = """SELECT CONCAT(Players.first_name, ' ', Players.last_name) AS player_name,  Games.name as game_name, Scores.score, Scores.scoreID
                    FROM Players
                    JOIN Scores on Players.playerID = Scores.playerID
                    JOIN Games on Games.gameID = Scores.gameID"""
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)
        
    elif request.method == 'POST':
        form_data = request.get_json()
        print(form_data)
        query = "INSERT INTO Scores (playerID, gameID, score) VALUES (%s, %s, %s);"
        cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['playerID'], form_data['gameID'], form_data['score']))
        return Response(status=201)

@app.route('/api/scores/<int:scoreID>', methods=["DELETE", "PUT"])
def delete_score(scoreID):
    db_connection = db.connect_to_database()
    if request.method == 'DELETE':
        query = "DELETE FROM Scores WHERE scoreID = %s;"
        db.execute_query(db_connection=db_connection, query=query, query_params=(scoreID,))
        return Response(status=204)
    elif request.method == 'PUT':
        form_data = request.get_json()
        print(form_data)
        query = "UPDATE Scores SET playerID=%s, gameID=%s, score=%s WHERE scoreID=%s;"
        db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['playerID'], form_data['gameID'], form_data['score'], form_data['scoreID']))
        return Response(status=200)

@app.route('/api/games-game-categories', methods=["POST", "GET"])
def gmaes_game_cat():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        query = """SELECT Games.name AS game_name, Game_Categories.category AS games_cat
                    FROM Games
                    JOIN Games_Game_Categories
                    ON Games.gameID = Games_Game_Categories.gameID
                    JOIN Game_Categories
                    ON Game_Categories.game_categoryID = Games_Game_Categories.categoryID;      
        """
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results))
        return jsonify(results)
    elif request.method == 'POST':
        form_data = request.get_json()
        gameID = form_data['gameID']['value']
        gameCatID = form_data['gameCatID']
        query = "INSERT INTO Games_Game_Categories (gameID, categoryID) VALUES (%s, %s);"

        for i in gameCatID:
            cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(gameID, i['value']))
        return Response(status=201)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run()