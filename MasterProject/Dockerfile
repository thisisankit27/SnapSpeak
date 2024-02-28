FROM python:3.10.13-slim

ENV PYTHONBUFFERED=1

COPY model/keras_model/xception_weights_tf_dim_ordering_tf_kernels_notop.h5 /root/.keras/models/

WORKDIR /django

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

RUN apt-get update && \
    apt-get install -y tesseract-ocr

COPY . /django

RUN python manage.py collectstatic --noinput

RUN chmod +x docker-entrypoint.sh

EXPOSE 8000

CMD ["/django/docker-entrypoint.sh"]