from crypt import methods
import os
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
        query = "INSERT INTO Games (name, min_number_player, max_number_player) VALUES (%s, %s, %s)"
        cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['name'], form_data['min_number_player'], form_data['max_number_player']))

        return redirect('/games')

@app.route('/api/games/<int:gameID>', methods=["DELETE"])
def delete_game(gameID):
    db_connection = db.connect_to_database()
    query = "DELETE FROM Games WHERE gameID = %s;"
    db.execute_query(db_connection=db_connection, query=query, query_params=(gameID,))
    return Response(status=204)

@app.route('/api/players', methods=["POST", "GET"])
def player():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        query = "SELECT * from Players;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)
    elif request.method == 'POST':
        form_data = request.get_json()
        
        fav_game = form_data['fav_game']
        print(form_data['fav_game'])
        first_name = form_data['first_name'].capitalize()
        last_name = form_data['last_name'].capitalize()
        
        if len(fav_game) == 0:
            query = "INSERT INTO Players (first_name, last_name) VALUES (%s, %s);"
            db.execute_query(db_connection=db_connection, query=query, query_params=(first_name, last_name,))
        else:
            query = "INSERT INTO Players (first_name, last_name, favorite_game) VALUES (%s, %s, %s);"
            db.execute_query(db_connection=db_connection, query=query, query_params=(first_name, last_name, fav_game))
        
        return redirect('/players')

@app.route('/api/players/<int:playerID>', methods=["DELETE"])
def delete_player(playerID):
    db_connection = db.connect_to_database()
    query = "DELETE FROM Players WHERE playerID = %s;"
    db.execute_query(db_connection=db_connection, query=query, query_params=(playerID,))
    return Response(status=204)

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
        cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['category'],))
        return redirect('/game-categories')

@app.route('/api/game-categories/<int:game_categoryID>', methods=["DELETE"])
def delete_game_cat(game_categoryID):
    db_connection = db.connect_to_database()
    query = "DELETE FROM Game_Categories WHERE game_categoryID = %s;"
    db.execute_query(db_connection=db_connection, query=query, query_params=(game_categoryID,))
    return Response(status=204)

@app.route('/api/scores', methods=["POST", "GET"])
def scores():
    db_connection = db.connect_to_database()
    if request.method == 'GET':
        #TODO: need to update with a join for the games and players table to get text not just the IDs
        query = "SELECT * from Scores;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        for r in results:
            print(r)
            
        print(results)
        return jsonify(results)
    elif request.method == 'POST':
        form_data = request.get_json()
        query = "INSERT INTO Scores (playerID, gameID, score) VALUES (%s, %s, %s);"
        print(form_data['playerID'])
        #TODO: find the IDs based on the name
        cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['playerID'], form_data['gameID'], form_data['score']))
        return redirect('/game-categories')

@app.route('/api/scores/<int:scoreID>', methods=["DELETE"])
def delete_score(scoreID):
    db_connection = db.connect_to_database()
    query = "DELETE FROM Scores WHERE scoreID = %s;"
    db.execute_query(db_connection=db_connection, query=query, query_params=(scoreID,))
    return Response(status=204)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run()