FROM python:3.13.4-slim-bullseye

WORKDIR /usr/src/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat-traditional

RUN pip install --upgrade pip
COPY ./requirements/dev_requirements.txt .
RUN pip install -r dev_requirements.txt

COPY ./entrypoint.sh .

RUN sed -i 's/\r$//g' /usr/src/entrypoint.sh
RUN chmod +x /usr/src/entrypoint.sh

COPY . . 

ENTRYPOINT [ "/usr/src/entrypoint.sh" ]
