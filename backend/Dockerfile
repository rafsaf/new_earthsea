FROM nginx/unit:1.25.0-python3.9

# Our Debian with Python and Nginx for python apps.
# See https://hub.docker.com/r/nginx/unit/
ENV PYTHONUNBUFFERED 1

COPY ./init.sh /docker-entrypoint.d/initial.sh
COPY ./config/config.json /docker-entrypoint.d/config.json

RUN chmod +x /docker-entrypoint.d/initial.sh

RUN mkdir build

# We create folder named build for our app.
WORKDIR /build

COPY ./app ./app
COPY ./alembic ./alembic
COPY ./alembic.ini .
COPY ./requirements.txt .

# We copy our app folder to the /build

RUN apt update && apt install -y python3-pip                                  \
    && pip3 install -r requirements.txt                                       \
    && apt remove -y python3-pip                                              \
    && apt autoremove --purge -y                                              \
    && rm -rf /var/lib/apt/lists/* /etc/apt/sources.list.d/*.list