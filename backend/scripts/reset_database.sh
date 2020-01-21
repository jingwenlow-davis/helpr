#!/bin/sh
echo "Hello World"
cd ../helpr
find . -name "__pycache__.py" -delete
rm db.sqlite3
cd api/migrations
shopt -s extglob
rm -v !("__init__.py")
cd ../..
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
admin
echo
pw
pw
y

