# backend/python-ai/model.py
from fastapi import FastAPI
import joblib
import numpy as np
import pandas as pd

app = FastAPI()
model = joblib.load("play_prediction_model.pkl")

@app.post("/predict_play")
async def predict_play(down: int, distance: int, formation: str, opponent_id: int):
    # Create input array
    input_data = pd.DataFrame({
        'down': [down],
        'distance': [distance],
        'formation': [formation],
        'opponent_id': [opponent_id]
    })

    # One-hot encode formation
    input_data = pd.get_dummies(input_data, columns=['formation'])

    # Ensure all formation columns exist (match training data)
    # This would need to match your training data's columns
    prediction = model.predict(input_data)

    return {"play_prediction": "run" if prediction[0] > 0.5 else "pass"}
