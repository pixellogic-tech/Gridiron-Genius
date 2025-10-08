# backend/python-ai/train_model.py
import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
import joblib

# Load dataset
data = pd.read_csv('plays_dataset.csv')

# Preprocess data
X = data[['down', 'distance', 'formation', 'opponent_id']]
y = data['play_type']

# Convert categorical data to numerical
X = pd.get_dummies(X, columns=['formation'])

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Build model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train model
model.fit(X_train, y_train, epochs=10, validation_data=(X_test, y_test))

# Save model
joblib.dump(model, 'play_prediction_model.pkl')
