from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# 1. Initialize the app
app = FastAPI()

# 2. CORS (Crucial for Mac/Local Dev)
# This lets your React Frontend (on port 3000) talk to this Backend (on port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins for the hackathon
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Mac Backend is Running!"}

@app.post("/analyze")
async def analyze_zip(payload: dict):
    # This is the 'Logic Bridge'
    # Person 1 (Frontend) sends: {"zipcode": "22102"}
    zipcode = payload.get("zipcode")
    
    # MOCK DATA: Use this until Person 3/4 finish the AI model
    return {
        "zipcode": zipcode,
        "score": 0.85, 
        "label": "High Risk - Banking Desert",
        "alternatives": [
            {"name": "Local Credit Union", "distance": "0.8 miles"},
            {"name": "CDFI Community Fund", "distance": "1.5 miles"}
        ]
    }