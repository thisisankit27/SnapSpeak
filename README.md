# SnapSpeak - Visual Elocution Synthesis



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
   cd MasterProject
   ```

3. Install the Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Go to the `MasterProject` directory and create a `.env` file in the same folder as `settings.py`. Add the following line to the `.env` file:

   ```dotenv
   SECRET_KEY=<your-secret-key>
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

```markdown
## Docker Installation

SnapSpeak can also be deployed using Docker for easier setup and portability. Follow these steps to run the application using Docker:

1. Make sure you have Docker installed on your system. If not, you can download and install Docker Desktop from [Docker's official website](https://www.docker.com/products/docker-desktop).

2. Clone the repository:

   ```bash
   git clone https://github.com/thisisankit27/SnapSpeak.git
   ```

3. Navigate to the project directory:

   ```bash
   cd MasterProject
   ```

4. Build and start the Docker containers using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the SnapSpeak application along with its dependencies.

5. Access the SnapSpeak application by visiting [http://localhost:8000/](http://localhost:8000/) in your web browser.

   The application should now be running in a Docker container, providing a convenient and isolated environment for SnapSpeak.

6. To stop the Docker containers, use the following command:

   ```bash
   docker-compose down
   ```

   This will stop and remove the containers.

**Note**: Ensure that port 8000 on your local machine is available and not occupied by another service before running Docker Compose. Adjust the `docker-compose.yml` file if you need to change the port configuration.
```