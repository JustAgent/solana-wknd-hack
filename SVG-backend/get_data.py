import requests
import json
import csv


def get_validators():
    with open('validators.csv', 'r') as file:
        csvreader = csv.reader(file)
        array = []
        for row in csvreader:
            array.append({
                'id': row[0],
                'name': row[1],
                'bio': row[2],
                'photo_url': row[3],
                'wallet_address': row[4],
                'status': row[5],
                'link_to_cv': row[6],
                'employment_status': row[7],
                'validationCount': row[8],
                'rangValidator': row[9],
                })
        return array

def get_games():
    with open('games.csv', 'r') as file:
        csvreader = csv.reader(file)
        array = []
        for row in csvreader:
            array.append({
                'id': row[0],
                'name': row[1],
                'description': row[2],
                'genre': row[3],
                'image_url': row[4],
                'status': row[5],
                'creator_name': row[6],
                'creator_png': row[7],
                'validator': row[8],
                'github_link': row[9],
                'game_link': row[10],
                })
        return array
