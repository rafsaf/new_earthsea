#!/bin/bash

# Run migrations
python -m alembic upgrade head

# Create initial data in DB
python -m app.initial_data
