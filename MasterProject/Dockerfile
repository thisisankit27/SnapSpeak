FROM python:3.10.13-slim

ENV PYTHONBUFFERED=1

WORKDIR /django

COPY requirements.txt requirements.txt

RUN python3 -m venv /opt/venv

RUN /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt

COPY . /django

RUN apt-get update && \
    apt-get install -y tesseract-ocr && \
    /opt/venv/bin/python manage.py collectstatic --noinput

RUN chmod +x docker-entrypoint.sh

EXPOSE 8000

CMD ["/django/docker-entrypoint.sh"]