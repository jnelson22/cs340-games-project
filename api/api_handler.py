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