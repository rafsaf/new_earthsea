## Local developemnt

```bash
# in 1st terminal window
cd backend
poetry install
docker-compose -f docker-compose.dev.yml up -d
bash prestart.sh

uvicorn app.main:app --reload
```