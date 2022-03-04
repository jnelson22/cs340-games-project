from crypt import methods
from flask import Flask, render_template, send_from_directory, request, jsonify, make_response, redirect
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
from api.api_handler import GamesApiHandler
from flask import request
import database.db_connector as db

app = Flask(__name__, static_folder='games-ui/build', static_url_path='/')
cors = CORS(app)
api = Api(app)

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
        print(results)
        print(jsonify(results))
        return jsonify(results)
    elif request.method == 'POST':
        print(request.get_json())
        form_data = request.get_json()
        query = "INSERT INTO Games (name, min_number_player, max_number_player) VALUES (%s, %s, %s)"
        cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(form_data['name'], form_data['min_number_player'], form_data['max_number_player']))

        return redirect('/games')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run()