FROM node:latest

ENV NODE_ENV=production
ENV ELASTIC_APM_JS_BASE_SERVICE_NAME=opbeans-react

WORKDIR /app
ADD . /app
# RUN npm install && npm install --save "jahtalab/apm-agent-js-base#intake-v2" && npm run-script build && rm -rf node_modules

# TEMPORARY HACK to install agent from github

RUN npm install
RUN npm install jahtalab/apm-agent-js-base#intake-v2 && rm -fr node_modules/elastic-apm-js-base
RUN git clone https://github.com/jahtalab/apm-agent-js-base.git /tmp/base && cd /tmp/base && git checkout intake-v2 && NODE_ENV=dev npm install && npm run build && cd /app && mv /tmp/base /app/node_modules/elastic-apm-js-base

RUN  npm run-script build && rm -rf node_modules

CMD ["npm", "run-script", "start"]
