# Magnetic Manticores

We are strong.

And this repository is part of [Python Discord Code Jam 2022](https://www.pythondiscord.com/events/code-jams/9/).

## Installation

### 0. 📋 We'll need `pipenv` and `NodeJs` + `npm`

#### Install `pipenv`
```bash
pip install pipenv
```
#### Install `NodeJs` + `npm`
Download from https://nodejs.org/en/

### 1. 🐍 Install Python environment

This will create a virtual environment in the current directory.
```bash
pipenv install --dev
```
- _Make sure you're in the same directory as `Pipfile`_
- _Drop `--dev` to only install dependencies required to run application_

### 2. 🌐 Install NodeJs environment

Navigate to the `src/client` directory to install the NodeJs environment.
```bash
cd src/client
npm install --dev
```
- _Drop `--dev` to only install dependencies required to run application_

🛑 *Don't forget to return to this root directory once you're done!*

### 3. 💻 Run the servers

We need to run both the Python websocket server and the NodeJs server for the client.
```bash
python src/server/app.py
```
_In another terminal,_
```bash
cd src/client
npm start
```

### 4. 👩‍💻 Play!
Just navigate to **http://127.0.0.1:8000/** to begin! 

