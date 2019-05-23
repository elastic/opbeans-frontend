FROM node:latest

ENV NODE_ENV=production
ENV ELASTIC_APM_JS_BASE_SERVICE_NAME=opbeans-react

WORKDIR /app
COPY . /app

RUN yarn install \
    && npm run-script build

CMD ["npm", "run-script", "start"]
