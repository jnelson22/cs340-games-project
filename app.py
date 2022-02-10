from email.policy import default
from flask import Flask, render_template, send_from_directory, request, jsonify, make_response
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='games-ui/build', static_url_path='')
cors = CORS(app)

@app.route('/', defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='https://cs340-games-project.herokuapp.com/')