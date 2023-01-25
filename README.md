[![Build Status](https://github.com/elastic/opbeans-frontend/actions/workflows/test.yml/badge.svg)](https://github.com/elastic/opbeans-frontend/actions/workflows/test.yml)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

It is posible to configure the Elastic APM Real User Monitoring (RUM) JavaScript Agent by using the following environment variables,
the environment variables are injected using the `.env.development` file and managed in the `src/run.js` file.
for more details about the setting see [Elastic APM Real User Monitoring Configuration](https://www.elastic.co/guide/en/apm/agent/rum-js/master/configuration.html) and the [.env.development file](.env.development):

* ELASTIC_APM_SERVICE_NAME Your Elastic APM service name.
* ELASTIC_APM_SERVICE_VERSION The version of the app.
* ELASTIC_APM_SERVER_URL The URL used to make requests to the APM Server.
* ELASTIC_APM_ACTIVE A boolean specifying if the agent should be active or not.
* ELASTIC_APM_ENVIRONMENT Environment where the service being monitored is deployed, e.g. "production", "development", "test", etc.
* ELASTIC_APM_LOG_LEVEL Set the verbosity level for the agent.

The products details page implements a random error to report errors to APM, it is possible to disable this error by setting the environment variable `ELASTIC_APM_RANDOM_ERROR` to false.

If you are not in development mode, the `.env.development` file is not used, so you have to define those environment variable with the prefix `REACT_APP_` (e.g. `REACT_APP_ELASTIC_APM_SERVICE_NAME`).

Any other environment variable started with `REACT_APP` is also injected in the app, see [Adding Custom Environment Variables](https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/adding-custom-environment-variables.md)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Proxying API Requests in Development

The request to `/api/*` are redirected to the backend, by default the backend URL is `http://localhost:3001`.
To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:

```js
  "proxy": "http://localhost:3001",
```

The environment variable `ELASTIC_OPBEANS_API_SERVER` or `REACT_APP_ELASTIC_OPBEANS_API_SERVER` allow you to change also the URL of the Opbeans backend service.
Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production.
For more details see [Proxying API Requests in Development](https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/proxying-api-requests-in-development.md)

## Running Tests

>Note: this feature is available with `react-scripts@0.3.0` and higher.<br>
>[Read the migration guide to learn how to enable it in older projects!](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030)

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. To prepare for this integration, we did a [major revamp](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.
