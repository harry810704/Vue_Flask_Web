from datetime import datetime
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from lotify.client import Client

# configuration
DEBUG = True
# instantiate the app
app = Flask(__name__, static_folder="./dist", static_url_path='/')
app.config.from_object(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/db'
# db = SQLAlchemy(app)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

'''
lotify Client initialize
'''
user_token = 'xF8acHmQKhxsPLlYzl06hsxMeohE7Cnr1zqTqm1lNbH'
client_id = '4SSlmI7OjxzkUqkJCbihHw'
client_secret = '2uEBrKAguPEapb32rZBou5tJ7BnUQiIKh6WwwAAOchS'
uri = 'https://harrywebapp.herokuapp.com:5000/message/line'
lotify = Client(client_id=client_id, client_secret=client_secret, redirect_uri=uri)

# Create message form model
# class Message(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     email = db.Column(db.String(120), nullable = False, unique = True)
#     content = db.Column(db.Text)
#     date_posted = db.Column(db.DateTime, default=datetime.now)

@app.route('/')
def index():
    return app.send_static_file('index.html')
# @app.route('/<path:path>')
# def catch_all(path):
#     if app.debug:
#         return request.get('http://localhost:8080/{}'.format(path)).text
#     return render_template("index.html")

# sanity check route
@app.route('/message', methods=['GET', 'POST'])
def message():
    response_object = {'status': True}
    MESSAGES = []
    if request.method == 'POST':
        post_data = request.get_json()
        MESSAGES.append(
            'FirstName: '+ post_data.get('fName')+
            ', LastName: '+ post_data.get('lName')+
            ', email: '+ post_data.get('email')+
            ', content: '+ post_data.get('content')
        )
        status = lotify.status(access_token=user_token)
        if status['status'] == 200:
            response = lotify.send_message(access_token=user_token, message=MESSAGES)
        response_object['message'] = 'Message sent!'
    else:
        response_object['message'] = 'Error! Fail to send the message - Try Again'
        response_object['status'] = False
    return jsonify(response_object)
   


if __name__ == '__main__':
    app.run(port=5000)