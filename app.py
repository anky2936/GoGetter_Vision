#app.py

from flask import Flask, request #import main Flask class and request object

app = Flask(__name__) #create the Flask app

@app.route('/ougiucd', methods=['POST'])
def query_example():
    print request.args.snapshot
    return

@app.route('/ocd', methods=['POST','GET']) #allow both GET and POST requests
def form_example():
    print request
    return request.data


@app.route('/json-example')
def json_example():
    return 'Todo...'

if __name__ == '__main__':
    app.run(host = '0.0.0.0' , debug=True, port=5000) #run app in debug mode on port 5000