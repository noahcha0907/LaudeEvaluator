from flask import Flask, request, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

# ── Configure upload folder
UPLOAD_FOLDER = os.path.join(os.getcwd(), "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route("/api/health")
def health():
    return {"status": "ok"}

@app.route("/api/upload", methods=["POST"])
def upload():
    if "image" not in request.files:
        return {"error": "No image part"}, 400

    file = request.files["image"]
    if file.filename == "":
        return {"error": "No selected file"}, 400

    filename = secure_filename(file.filename)
    save_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(save_path)
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
CORS(app)

# ── Configure upload folder
UPLOAD_FOLDER = os.path.join(os.getcwd(), "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route("/api/health")
def health():
    return {"status": "ok"}

@app.route("/api/upload", methods=["POST"])
def upload():
    if "image" not in request.files:
        return {"error": "No image part"}, 400

    file = request.files["image"]
    if file.filename == "":
        return {"error": "No selected file"}, 400

    filename = secure_filename(file.filename)
    save_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(save_path)

    # Placeholder report
    report = {"range": "$100k–$150k", "score": 98}

    return {
        "filename": filename,
        "url": f"/uploads/{filename}",
        "report": report
    }

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

if __name__ == "__main__":
    app.run(debug=True)
