import os
from flask import Flask, render_template, flash

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('front.html')

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
