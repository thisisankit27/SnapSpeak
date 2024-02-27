#!/bin/bash
APP_PORT=${DJANGO_EXPOSE_PORT:-8000}
cd /django/
gunicorn --worker-tmp-dir /dev/shm MasterProject.wsgi:application --bind "0.0.0.0:${APP_PORT}"