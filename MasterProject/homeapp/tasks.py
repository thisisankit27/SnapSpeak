from celery import shared_task
from mongodb_config import db
from PIL import Image
from io import BytesIO
import base64

@shared_task
def upload_image_to_mongodb_task(image_data):
    image = Image.open(BytesIO(base64.b64decode(image_data.split(',')[1])))
    # Convert RGBA image to RGB mode
    if image.mode == 'RGBA':
        image = image.convert('RGB')

    # Upload image to MongoDB
    images_collection = db['images']
    image_bytes = BytesIO()
    image.save(image_bytes, format='JPEG')  # Assuming JPEG format, adjust as needed
    image_data = image_bytes.getvalue()
    image_doc = {'image_data': image_data}
    images_collection.insert_one(image_doc)
