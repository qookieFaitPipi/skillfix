from flask import *
from flask_cors import CORS
from send_mail import sendMail, renderMail
import json
import sqlite3
import time
import hashlib

app = Flask(__name__)
CORS(app)

def database_request(request):
    with sqlite3.connect('database.db', timeout=100000) as connect:
        cursor = connect.cursor()
        cursor.execute(request)
        result = cursor.fetchall()
    return result

def tokenizer(email):
    time_hash = time.time()
    email_hash = hashlib.sha256((email + str(time_hash)).encode("utf-8")).hexdigest()
    return email_hash

@app.route("/auth", methods=["POST"])
def auth():
    data = request.get_json()
    if not data or "login" not in data or "password" not in data:
        return jsonify({'is_auth': False}), 400
    ans = database_request('SELECT id, confirmed FROM Users WHERE email="{}" and password="{}"'.format(data["login"], data["password"]))
    if ans:
        if ans[0][1] == 1:
            return jsonify({'is_auth': True, 'confirmed': True}), 200
        else:
            return jsonify({'is_auth': False, 'confirmed': False}), 401
    return jsonify({'is_auth': False, 'confirmed': False}), 401

@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if not data or "login" not in data or "password" not in data:
        return jsonify({'is_register': 'False'}), 400
    hash_email = tokenizer(data["login"])
    database_request('INSERT INTO Users (id, email, password, hashtoken, confirmed) VALUES (NULL, "{}", "{}", "{}", {})'.format(data["login"], data["password"], hash_email, 0))
    message = renderMail("reg_email.html", page_address=config["hostname"] + "/confirm?key=" + hash_email)
    sendMail(data["login"], message, "Новая регистрация на САЙТЕ", config["email"], config["email-password"])
    if database_request('SELECT id, confirmed FROM Users WHERE email="{}" and password="{}"'.format(data["login"], data["password"])):
        return jsonify({'is_register': 'True'}), 200
    return jsonify({'is_register': 'False'}), 500

@app.route("/confirm", methods=["POST"])
def confirm():
    data = request.get_json()
    if not data or "key" not in data:
        return jsonify({'is_confirm': 'False'}), 400
    login = database_request('SELECT id FROM Users WHERE hashtoken="{}"'.format(data["key"]))
    if login:
        database_request('UPDATE Users SET confirmed={} WHERE hashtoken="{}"'.format(1, data["key"]))
        if not database_request('SELECT confirmed FROM Users WHERE hashtoken="{}"'.format(data["key"]))[0][0]:
            return jsonify({"is_confirm": False}), 403
        return jsonify({"is_confirm": True}), 200
    return jsonify({"is_confirm": False}), 401


if __name__ == "__main__":
    config = json.load(open("config.cfg"))
    if config["https"]:
        app.run(host=config["host"], port=config["port"], ssl_context=config["ssl_context"])
    else:
        app.run(host=config["host"], port=config["port"])
