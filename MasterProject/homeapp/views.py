from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64
# pip install pillow
from PIL import Image
from io import BytesIO

import time
import pytesseract
# Importing the Keras libraries and packages
from .utils import generate_caption_for_image


def home(request):
    return render(request, 'homepage.html')


def perform_ocr(image):
    # Perform OCR using pytesseract
    text = pytesseract.image_to_string(image)
    return text


@csrf_exempt  # Use csrf_exempt for simplicity, consider using csrf_protect in production with proper CSRF handling
def upload_image_view(request):
    if request.method == 'POST':
        image_data = request.POST.get('image_data')
        # Convert base64 image data to PIL Image
        image = Image.open(BytesIO(base64.b64decode(image_data.split(',')[1])))
        # captioning_image = BytesIO()
        # image.save(captioning_image, format='JPEG')
        # captioning_image.seek(0)

        # Captioning Function calls START here:

        captions = generate_caption_for_image(image)

        # Captioning function calls END here

        ocrText = perform_ocr(image)
        if (ocrText == ""):
            ocrText = "No Text Found"

        contcatenated = "Visual Elocution: " + captions + "\n" + "OCR: " + ocrText

        # return a response if needed
        return JsonResponse({'status': 'success', 'message': contcatenated})
        # return JsonResponse({'status': 'success', 'message': ocrText, 'captions': captions})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})
