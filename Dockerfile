FROM node:latest

ENV NODE_ENV=production
ENV ELASTIC_APM_JS_BASE_SERVICE_NAME=opbeans-react

WORKDIR /app
ADD . /app
RUN npm install && npm run-script build && rm -rf node_modules
CMD ["npm", "run-script", "start"]
