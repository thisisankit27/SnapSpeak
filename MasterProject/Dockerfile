FROM python:3.10.13-slim

ENV PYTHONBUFFERED=1

COPY . /django
WORKDIR /django

RUN python3 -m venv /opt/venv

RUN /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt && \
    apt-get update && \
    apt-get install -y tesseract-ocr

RUN /opt/venv/bin/python manage.py collectstatic --noinput

RUN chmod +x docker-entrypoint.sh

CMD ["/django/docker-entrypoint.sh"]

EXPOSE 8000