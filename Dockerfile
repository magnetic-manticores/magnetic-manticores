FROM python:3.10-slim-bullseye

USER root

# Setup env
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN useradd -ms /bin/bash manticore

USER manticore
WORKDIR /home/manticore

COPY Pipfile.lock /home/manticore
COPY . /home/manticore

RUN pip install pipenv
RUN python -m pipenv install --system --deploy --ignore-pipfile

CMD python -m src.main
