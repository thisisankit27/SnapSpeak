# SnapSpeak - Visual Elocution Synthesis

Welcome to MasterProject, a Django application for [brief description of your application].

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
   git clone https://github.com/your-username/MasterProject.git
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
python manage.py runserver
```
   
## Run the Application

Run the following command to start the Django development server:

```bash
python manage.py collectstatic
```

## Project Structure

```
MasterProject/
├── .gitignore
├── README.md
├── requirements.txt
├── tree.txt
├── homeapp/
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   ├── views.py
│   ├── __init__.py
│   └── migrations/
│       └── __init__.py
├── MasterProject/
│   ├── .env
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── __init__.py
├── static/
│   ├── assets/
│   │   └── ...
│   └── css/
│       └── styles.css
│   └── js/
│       └── script.js
└── templates/
    └── homepage.html
```