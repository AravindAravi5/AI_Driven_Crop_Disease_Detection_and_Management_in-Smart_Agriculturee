from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__)
app.secret_key = 'agrofield_secret_2024'  # needed for sessions

# Simple in-memory users (email: password)
USERS = {
    "admin@agrofield.com": "admin123",
    "farmer@agrofield.com": "farmer123",
    "test@test.com": "test123",
}

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/home.html')
def home():
    return render_template('home.html')

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        email    = request.form.get('email', '').strip()
        password = request.form.get('password', '').strip()
        if email in USERS and USERS[email] == password:
            session['user'] = email
            return redirect(url_for('index'))
        else:
            error = 'Invalid email or password. Please try again.'
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('index'))

@app.route('/aimodal.html')
def aimodal():
    return render_template('aimodal.html')

@app.route('/finance.html')
def finance():
    return render_template('finance.html')

@app.route('/financepop.html')
def financepop():
    return render_template('financepop.html')

@app.route('/learnpopup.html')
def learnpopup():
    return render_template('learnpopup.html')

@app.route('/MainMedia.html')
def media():
    return render_template('MainMedia.html')

@app.route('/mediafor tomatobilght.html')
def tomato_blight():
    return render_template('mediafor tomatobilght.html')

@app.route('/mediaforapplesacb.html')
def apple_scab():
    return render_template('mediaforapplesacb.html')

@app.route('/mediaforcornsmut.html')
def corn_smut():
    return render_template('mediaforcornsmut.html')

@app.route('/mediaforriceblast.html')
def rice_blast():
    return render_template('mediaforriceblast.html')

@app.route('/mediaforwheatrust.html')
def wheat_rust():
    return render_template('mediaforwheatrust.html')

@app.route('/mediapotatoblight.html')
def potato_blight():
    return render_template('mediapotatoblight.html')

@app.route('/weather.html')
def weather():
    return "<h1>Weather Service - Coming Soon</h1><p>We are integrating real-time weather data for your farm. please check back soon!</p><a href='/'>Go Home</a>"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

