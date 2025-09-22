from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/stories")
def create_story(payload: dict):
    return {"id": "s_123", "title": payload.get("title")}


@app.get("/stories/{story_id}")
def get_story(story_id: str):
    return {"id": story_id}
