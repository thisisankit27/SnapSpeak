#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import webbrowser

flag_file = "flag.txt"


def main():
    if sys.argv[1] == "runserver" and not os.path.exists(flag_file):
        with open(flag_file, 'w') as f:
            webbrowser.open('http://127.0.0.1:8000/')
            f.write("visited")

    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MasterProject.settings')
    if len(sys.argv) > 1 and sys.argv[1] == 'runserver' and len(sys.argv) == 2:
        from django.core.management.commands.runserver import Command as runserver
        runserver.default_port = "8000"  # Set the default port to 1415
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

     # Check if "runserver" is in sys.argv before modifying it

    execute_from_command_line(sys.argv)
    if os.path.exists(flag_file):
        os.remove(flag_file)
    sys.exit(0)


if __name__ == '__main__':
    main()
