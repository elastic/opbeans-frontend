FROM node:20-alpine

RUN apk update && \
    apk --no-cache add git && \
    rm -rf /var/cache/apk/*

ENV NODE_ENV=production
ENV ELASTIC_APM_JS_BASE_SERVICE_NAME=opbeans-react
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN npm install npm@latest -g 

WORKDIR /app
COPY . /app

RUN chown -R node:node /app
USER node
# Need it to enable preinstall scripts in remote host
RUN npm install \
    && npm run build

ENV DISABLE_ESLINT_PLUGIN=true
ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
ENV WDS_SOCKET_PORT=0

LABEL \
    org.label-schema.schema-version="1.0" \
    org.label-schema.vendor="Elastic" \
    org.label-schema.name="opbeans-frontend" \
    org.label-schema.version="@elastic/apm-rum@5.12.0" \
    org.label-schema.url="https://hub.docker.com/r/opbeans/opbeans-frontend" \
    org.label-schema.vcs-url="https://github.com/elastic/opbeans-frontend" \
    org.label-schema.license="MIT"

CMD ["npm", "run", "start"]
