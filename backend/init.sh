#!/bin/bash

# Run migrations
echo "migrations"
python -m alembic upgrade head

echo "initial data"
# Create initial data in DB
python -m app.initial_data
