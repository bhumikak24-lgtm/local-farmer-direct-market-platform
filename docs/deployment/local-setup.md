# Local Development Setup

## Clone Repository

git clone https://github.com/username/farmconnect.git

## Backend Setup

cd backend

python -m venv venv

Windows

venv\Scripts\activate

Install Dependencies

pip install -r requirements.txt

Run Migrations

python manage.py migrate

Start Server

python manage.py runserver

## Frontend Setup

cd frontend

npm install

npm run dev