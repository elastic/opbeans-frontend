FROM node:latest

ENV NODE_ENV=production
ENV ELASTIC_APM_JS_BASE_SERVICE_NAME=opbeans-react

WORKDIR /app
COPY . /app

# Need it to enable preinstall scripts in remote host
RUN npm install --unsafe-perm \
    && npm run-script build

CMD ["npm", "run-script", "start"]
