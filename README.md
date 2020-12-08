# Podols React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Setup keycloak and a realm to work with.

Make sure you set up a realm with a user and a client

make the root url of your client: {your link}/{your realm}
example: http://localhost:8080/myrealm

set your clients acces type to confidential.


## Add a .env file to your root with these values.

`REACT_APP_KEYCLOAK_URL = {you keycloak link}/auth/realms/{your realm}/protocol/openid-connect/token`

`REACT_APP_AUTH_CLIENT_ID = {your keycloak client ID}`

`REACT_APP_AUTH_CLIENT_SECRET = {your keycloak Client secret}`

`REACT_APP_AUTH_GRANT_TYPE = {your keycloak grant type}`

`REACT_APP_AUTH_USERNAME = {your keycloak username}`

`REACT_APP_AUTH_PASSWORD = {your keycloak user password}`
