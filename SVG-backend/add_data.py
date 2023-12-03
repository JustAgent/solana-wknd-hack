import requests
import json
import csv


def add_data_validator(id, name, bio, photo_url, wallet_address, status, link_to_cv, employment_status, validationCount, rangValidator):
    with open('validators.csv','a') as csvfile:
        total = 0
        writer = csv.writer(csvfile)
        # writer.writerow(('id','name', 'bio', 'photo_url', 'wallet_address', 'status', 'link_to_cv', 'employment_status', 'validationCount', 'rangValidator')) # Создает хэдеры
        writer.writerow((id, name, bio, photo_url, wallet_address, status, link_to_cv, employment_status, validationCount, rangValidator)) # Создает строку с данными
        return [{'status': 'OK'}]


def add_data_game(id, name, description, genre, image_url, status, creator_name, creator_png, validator, github_link, game_link):
    with open('games.csv','a') as csvfile:
        total = 0
        writer = csv.writer(csvfile)
        # writer.writerow(('id', 'name', 'description', 'genre', 'image_url', 'status', 'creator_name', 'creator_png', 'validator', 'github_link', 'game_link')) # Создает хэдеры
        writer.writerow((id, name, description, genre, image_url, status, creator_name, creator_png, validator, github_link, game_link)) # Создает строку с данными
        return [{'status': 'OK'}]
