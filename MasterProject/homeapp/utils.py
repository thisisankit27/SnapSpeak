from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.applications.xception import Xception
from keras.models import load_model
from pickle import load
import numpy as np
from PIL import Image


def load_tokenizer_and_model():
    tokenizer = load(open("model/tokenizer.p", "rb"))
    model = load_model('model/model_9.h5')
    xception_model = Xception(include_top=False, pooling="avg")
    return tokenizer, model, xception_model


def extract_features(image, model):
    image = image.resize((299, 299))
    image = np.array(image)
    if image.shape[2] == 4:
        image = image[..., :3]
    image = np.expand_dims(image, axis=0)
    image = image/127.5
    image = image - 1.0
    feature = model.predict(image)
    return feature


def word_for_id(integer, tokenizer):
    for word, index in tokenizer.word_index.items():
        if index == integer:
            return word
    return None


def generate_caption(model, tokenizer, photo, max_length):
    in_text = ''
    for i in range(max_length):
        sequence = tokenizer.texts_to_sequences([in_text])[0]
        sequence = pad_sequences([sequence], maxlen=max_length)
        pred = model.predict([photo, sequence], verbose=0)
        pred = np.argmax(pred)
        word = word_for_id(pred, tokenizer)
        if word is None or word == 'end':
            break
        in_text += ' ' + word
    return in_text


def generate_caption_for_image(image):
    tokenizer, model, xception_model = load_tokenizer_and_model()
    max_length = 32
    # image = Image.open(image_path)
    photo = extract_features(image, xception_model)
    caption = generate_caption(model, tokenizer, photo, max_length)
    return caption
