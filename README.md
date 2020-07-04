## Running the application

1. Modify `src/config/app-config.json` to match your user pool and application URLs. When running locally with the UI, the `signoutUri` will property need to be `http://localhost:3000/` and the `callbackUri` property will need to be `http://localhost:3000/callback`.
2. Run `npm install` to setup and install the dependencies.
3. Run `DEBUG=cognito-demo-service:* npm start` to start the service.
4. The service will start listening at `http:localhost:3000`.
5. Using curl call the GET /users REST API:

```
curl -X GET http://localhost:3010/users -H 'Authorization: Bearer <your_JWT_token>'
```