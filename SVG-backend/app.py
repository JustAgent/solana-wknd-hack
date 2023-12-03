from flask import Flask, jsonify, request
from flask_cors import CORS
from add_data import *
from create_tables import *
from get_data import *
import config
import requests
import json
import csv


app = Flask(__name__)
# CORS(app)


@app.route('/api/get-games', methods=['GET'])
def api_get_games():
	result = get_games()
	return result

@app.route('/api/get-validators', methods=['GET'])
def api_get_validators():
	return get_validators()

@app.route('/api/add-validator', methods=['POST'])
def api_add_validators():
	info = request.get_json()
	return add_data_validator(info['id'], info['name'], info['bio'], info['photo_url'], info['wallet_address'], info['status'], info['link_to_cv'], info['employment_status'], info['validationCount'], info['rangValidator'])

@app.route('/api/add-game', methods=['POST'])
def api_add_game():
	info = request.get_json()
	return add_data_game(info['id'], info['name'], info['description'], info['genre'], info['image_url'], info['status'], info['creator_name'], info['creator_png'], info['validator'], info['github_link'], info['game_link'])



if __name__ == '__main__':
	app.run(host="0.0.0.0", port=8080)