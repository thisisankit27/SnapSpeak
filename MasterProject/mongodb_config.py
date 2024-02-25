import os
import pymongo

MONGODB_HOST = os.environ.get('MONGODB_HOST')
MONGODB_PORT = int(os.environ.get('MONGODB_EXPOSE_PORT', '27017'))
mongo_client = pymongo.MongoClient(host=MONGODB_HOST, port=MONGODB_PORT)
db = mongo_client['snapspeak_mongodb_client']
