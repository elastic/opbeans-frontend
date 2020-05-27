FROM node:12-alpine

RUN apk update && \
    apk --no-cache add git && \
    rm -rf /var/cache/apk/*

ENV NODE_ENV=production
ENV ELASTIC_APM_JS_BASE_SERVICE_NAME=opbeans-react
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /app
COPY . /app

# Need it to enable preinstall scripts in remote host
RUN npm install --unsafe-perm \
    && npm run-script build

CMD ["npm", "run-script", "start"]
