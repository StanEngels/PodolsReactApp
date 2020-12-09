# Podols React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Setup keycloak and a realm to work with.

Here is an easy way of setting up keycloak on a docker container.\
There are other ways to host your keycloak server, but this is an easy way to start with.

[How to setup keycloak on docker](https://www.keycloak.org/getting-started/getting-started-docker)

after installing keycloak, make sure you set up a realm with a user and a client

make the root url of your client: {your link}/{your realm}
example: http://localhost:8080/myrealm

set your clients acces type to confidential.


## Add a .env file to your root with these values.

These values come from your keycloak which we created above.

`REACT_APP_API_URL = https://localhost:5001`

`REACT_APP_KEYCLOAK_URL = {you keycloak link}/auth/realms/{your realm}/protocol/openid-connect/token`

`REACT_APP_AUTH_CLIENT_ID = {your keycloak client ID}`

`REACT_APP_AUTH_CLIENT_SECRET = {your keycloak Client secret}`

`REACT_APP_AUTH_GRANT_TYPE = {your keycloak grant type}`

`REACT_APP_AUTH_USERNAME = {your keycloak username}`

`REACT_APP_AUTH_PASSWORD = {your keycloak user password}`

## Get the api running
Open the [Api Readme](https://github.com/StanEngels/PodolsPresetApi/blob/main/README.md) and start up your api.
