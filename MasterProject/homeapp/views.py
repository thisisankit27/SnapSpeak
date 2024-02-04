from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import base64
# pip install pillow
from PIL import Image
from io import BytesIO

import time
import pytesseract

# Create your views here.


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
        print(image)

        print('sleep started')
        time.sleep(3)
        print('sleep completed')

        ocrText = perform_ocr(image)
        # Process the image as needed
        # For example, you can save the image to the media folder
        # image.save('path/to/media/folder/your_uploaded_image.png')

        # return a response if needed
        return JsonResponse({'status': 'success', 'message': ocrText})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})
