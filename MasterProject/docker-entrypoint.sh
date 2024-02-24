#!/bin/bash
APP_PORT=${PORT:-8000}
cd /django/
/opt/venv/bin/gunicorn --worker-tmp-dir /dev/shm MasterProject.wsgi:application --bind "0.0.0.0:${APP_PORT}"