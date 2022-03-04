from flask_restful import Api, Resource, reqparse
import sys
import os
sys.path.append("..")
import database.db_connector as db


class GamesApiHandler(Resource):
    def get(self):

        db_connection = db.connect_to_database()
        query = "SELECT * from Games;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(results)
        return results

    def post(self):
        print(self)
        
        parser = reqparse.RequestParser()
        # parser.add_argument('type', type=str)
        parser.add_argument('body')

        args = parser.parse_args()

        print(args)

        return