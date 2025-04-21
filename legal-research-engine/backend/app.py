from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from qa_engine import get_answer  # Your local model function

app = Flask(__name__)
CORS(app)

# Directly written Gemini API URL with key
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB0Qvji1MJe0EG-2fCWQ9BHfx4a2dyrHvM"

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    question = data.get("question")

    if not question:
        return jsonify({"error": "No question provided"}), 400

    # Check if question is about an Article
    if "Article" in question:
        answer = get_answer(question)
        cleaned_answer = clean_answer(answer)
        return jsonify({"question": question, "answer": cleaned_answer})

    # Otherwise, use Gemini
    gemini_answer = get_answer_from_gemini(question)
    if gemini_answer:
        cleaned_answer = clean_answer(gemini_answer)
        return jsonify({"question": question, "answer": cleaned_answer})
    else:
        return jsonify({"question": question, "answer": "⚠️ No answer found from Gemini API."})


def get_answer_from_gemini(question):
    """
    Send request to Gemini 2.0 Flash API and return the response.
    """
    headers = {
        "Content-Type": "application/json"
    }

    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": question
                    }
                ]
            }
        ]
    }

    try:
        response = requests.post(GEMINI_API_URL, headers=headers, json=payload)
        response.raise_for_status()
        gemini_data = response.json()

        # Debug print to see what Gemini returned
        print("Gemini Response:", gemini_data)

        # Extract the actual answer from the response
        candidates = gemini_data.get("candidates", [])
        if candidates and "content" in candidates[0]:
            parts = candidates[0]["content"].get("parts", [])
            if parts and "text" in parts[0]:
                return parts[0]["text"]

        return "⚠️ Gemini returned an unexpected response format."

    except requests.exceptions.RequestException as e:
        print("Error calling Gemini API:", e)
        return None


def clean_answer(answer):
    """
    Function to clean the answer by removing '**' (bold formatting) from the response.
    """
    return answer.replace("**", "")


if __name__ == "__main__":
    app.run(debug=True)
