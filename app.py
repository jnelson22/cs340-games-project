from flask import Flask, render_template, send_from_directory, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
from api.api_handler import GamesApiHandler

app = Flask(__name__, static_folder='games-ui/build', static_url_path='')
cors = CORS(app)
api = Api(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

api.add_resource(GamesApiHandler, '/api/games')

if __name__ == '__main__':
    app.run()