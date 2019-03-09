# choo-minimal

A minimal isormorphic starter template (i.e. boilerplate) for [choojs](https://choo.io)

## Getting started

```
git clone git@github.com:azappella/choo-minimal.git
npm install
npm start
```

This will start a development server with parcel.

## Config

If you want to modify the default configuration or environment variables:

```
cp .env.local.sample .env.local
```

Then open and edit the .env.local file (e.g. change NODE_ENV to `production`)

## Launch the server

```
npm run server
```

## Stop the server

```
npx pm2 stop choo-minimal-dev
```

## Kill pm2 processes

The following will kill all processes running with pm2 (be careful where you run it)

```
npx pm2 kill
```