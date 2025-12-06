from qdrant_client import QdrantClient
import os

qdrant = QdrantClient(url=os.environ["QDRANT_URL"], api_key=os.environ["QDRANT_API_KEY"])

# Recreate collection
qdrant.recreate_collection(
    collection_name="book_chunks",
    vectors_config={
        "size": 1536,
        "distance": "Cosine"
    }
)

print("✅ Collection 'book_chunks' created successfully!")
