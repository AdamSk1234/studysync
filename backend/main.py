from fastapi import FastAPI
# 🆕
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 🆕 pozwalamy na front z localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}
