import json
import re
import os

# Load question-answer pairs
file_path = os.path.join(os.path.dirname(__file__), 'data/question_answer_pairs_descriptive.json')
with open(file_path, 'r') as f:
    qa_pairs = json.load(f)

# Build a dictionary mapping article numbers to their descriptive answers
article_dict = {}
for pair in qa_pairs:
    match = re.search(r'Article (\d+[A-Za-z]*)', pair['question'])
    if match:
        article_number = match.group(1)
        article_dict[article_number] = pair['answer']

# Main function to get answer from a question
def get_answer(question):
    match = re.search(r'Article (\d+[A-Za-z]*)', question)
    if match:
        article_number = match.group(1)
        return article_dict.get(article_number, f"❌ No information found for Article {article_number}.")
    return "❌ I've searched for that information, but unfortunately, I haven't been able to find a direct match within my current knowledge base."
