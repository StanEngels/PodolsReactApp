# Podols React App installation

## Setup keycloak and a realm to work with.

Here is an easy way of setting up keycloak on a docker container.\
There are other ways to host your keycloak server, but this is an easy way to start with:
[How to setup keycloak on docker](https://www.keycloak.org/getting-started/getting-started-docker)

After installing keycloak, make sure you set up a realm with a user and a client
make the root url of your client: {your link}/{your realm}
example: http://localhost:8080/myrealm
And set your clients acces type to confidential.

## Add a .env file to your root with these values.

These values come from your keycloak which we created above.

`REACT_APP_API_URL = https://localhost:5001`\
`REACT_APP_KEYCLOAK_URL = {you keycloak link}/auth/realms/{your realm}/protocol/openid-connect/token`\
`REACT_APP_AUTH_CLIENT_ID = {your keycloak client ID}`\
`REACT_APP_AUTH_CLIENT_SECRET = {your keycloak Client secret}`\
`REACT_APP_AUTH_GRANT_TYPE = {your keycloak grant type}`\
`REACT_APP_AUTH_USERNAME = {your keycloak username}`\
`REACT_APP_AUTH_PASSWORD = {your keycloak user password}`

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Get the api running
Open the [Api Readme](https://github.com/StanEngels/PodolsPresetApi/blob/main/README.md) and start up your api.

## What to do now?

When everything is up and running here are a few issues that are great for newcomers: [Click me!](https://github.com/StanEngels/PodolsReactApp/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

When you are more experience here is the normal issue board without filters: [Click me!](https://github.com/StanEngels/PodolsReactApp/issues)
