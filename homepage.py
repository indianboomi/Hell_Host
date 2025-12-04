from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def home():
    return render_template_string("""
    <html>
    <head>
        <title>HELL HOST</title>
        <style>
            body { background-color: black; color: red; font-family: Arial, sans-serif; text-align: center; }
            .badge { background-color: red; color: white; padding: 5px 10px; border-radius: 5px; display: inline-block; margin-top: 10px; }
            .play-button { background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-top: 20px; cursor: pointer; }
        </style>
    </head>
    <body>
        <h1>HELL HOST</h1>
        <div class="badge">But Paid</div>
        <p>Minecraft Hosting Server Paid But Login = 1 Month Free</p>
        <button class="play-button">Play</button>
    </body>
    </html>
    """)

if __name__ == '__main__':
    app.run(debug=True)
