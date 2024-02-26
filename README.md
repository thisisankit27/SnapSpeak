# SnapSpeak - Redefining Visual Storytelling

SnapSpeak is your go-to platform for transforming images into captivating narratives. Our user-friendly interface allows for seamless image uploads, drag-and-drop functionality, and on-the-go capture using the Media Stream API. Choose between our Image Caption Generator or OCR for versatile text extraction.

Behind the scenes, our server processes images with precision, employing advanced techniques like py-tesseract OCR and a finely tuned model trained on the Flickr30K dataset. 

The future of SnapSpeak is bright. We're expanding with MongoDB integration for image storage, Docker deployment, and scaling on Digital Ocean's Kubernetes. Jenkins ensures a smooth development pipeline.

Join us in revolutionizing visual communication with SnapSpeak. Let your images do the talking.



https://github.com/thisisankit27/SnapSpeak/assets/69184999/83964317-aabe-4c90-82b9-ac8ccfffadc5


## Windows Installation

## Prerequisites

Before you begin, make sure you have the following installed and set up on your system:

1. [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) - Install Tesseract OCR for Windows using the installer: [tesseract-ocr-w64-setup-5.3.3.20231005.exe](https://digi.bib.uni-mannheim.de/tesseract/tesseract-ocr-w64-setup-5.3.3.20231005.exe).

2. Set the system PATH for Tesseract to `C:\Program Files\Tesseract-OCR`.

3. Create a new system environment variable:
   - **Name**: `TESSDATA_PREFIX`
   - **Value**: `C:\Program Files\Tesseract-OCR\tessdata`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thisisankit27/SnapSpeak.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SnapSpeak
   cd MasterProject
   ```

3. Install the Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the same folder as `manage.py`. Add the following line to the `.env` file:

   ```dotenv
   DEBUG=1
   DJANGO_EXPOSE_PORT=8020
   DJANGO_PROD_PORT=8001
   SECRET_KEY=<your-secret-key>

   MONGODB_HOST=mongodb
   MONGODB_EXPOSE_PORT=27017
   MONGODB_PROD_PORT=27017
   ```

   Replace `<your-secret-key>` with a securely generated secret key for your Django application. You can use online tools or Django's `django.core.management.utils.get_random_secret_key()` method to generate a new key. Make sure to keep this key confidential and never share it publicly.

5. Collect the static files:

```bash
python manage.py collectstatic
```

## Run the Application

Run the following command to start the Django development server:

```bash
python manage.py runserver
```
or 

```bash
gunicorn MasterProject.wsgi:application --bind 127.0.0.1:8000
```
   
## Docker Installation

SnapSpeak can also be deployed using Docker for easier setup and portability. Follow these steps to run the application using Docker:

1. Make sure you have Docker installed on your system. If not, you can download and install Docker Desktop from [Docker's official website](https://www.docker.com/products/docker-desktop).

2. Clone the repository:

   ```bash
   git clone https://github.com/thisisankit27/SnapSpeak.git
   ```

3. Navigate to the project directory:

   ```bash
   cd SnapSpeak
   cd MasterProject
   ```

4. Create a `.env` file in the same folder as `manage.py`. Add the following line to the `.env` file:

   ```dotenv
   DEBUG=1
   DJANGO_EXPOSE_PORT=8020
   DJANGO_PROD_PORT=8001
   SECRET_KEY=<your-secret-key>

   MONGODB_HOST=mongodb
   MONGODB_EXPOSE_PORT=27017
   MONGODB_PROD_PORT=27017
   ```

   Replace `<your-secret-key>` with a securely generated secret key for your Django application. You can use online tools or Django's `django.core.management.utils.get_random_secret_key()` method to generate a new key. Make sure to keep this key confidential and never share it publicly.


5. Build and start the Docker containers using Docker Compose:

   ```bash
   docker compose up --build
   ```

   This command will build the Docker image and start the SnapSpeak application along with its dependencies.

6. Access the SnapSpeak application by visiting [http://localhost:8001/](http://localhost:8001/) in your web browser.

   The application should now be running in a Docker container, providing a convenient and isolated environment for SnapSpeak.

7. To stop the Docker containers, use the following command:

   ```bash
   docker compose down
   ```

   This will stop and remove the containers.

**Note**: Ensure that port 8001 on your local machine is available and not occupied by another service before running Docker Compose. Adjust the `docker-compose.yml` file if you need to change the port configuration.
