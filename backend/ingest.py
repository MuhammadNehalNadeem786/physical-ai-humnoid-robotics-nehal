from qdrant_client import QdrantClient
import os

client = api_key=os.environ["GEMINI_API_KEY"]
qdrant = QdrantClient(url=os.environ["QDRANT_URL"], api_key=os.environ["QDRANT_API_KEY"])

def embed_text(text):
    emb = client.embeddings.create(model="gemini-2.0-flash", input=text)
    return emb.data[0].embedding

def store_docs():
    for file in os.listdir("../docs"):
        if file.endswith(".md"):
            with open(f"../docs/{file}", "r") as f:
                content = f.read()
                vector = embed_text(content)
                qdrant.upsert(
                    collection_name="book_chunks",
                    points=[{
                        "id": file,
                        "vector": vector,
                        "payload": {"content": content}
                    }]
                )
    print("✅ All docs stored in Qdrant!")

if __name__ == "__main__":
    store_docs()
