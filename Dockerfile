FROM node:9-alpine
MAINTAINER Mike Williamson <mike.williamson@tbs-sct.gc.ca>
LABEL Description="Government of Canada NRCAN Proof of Concept" Vendor="Canadian Digital Service"

WORKDIR /app
ADD . .

RUN yarn install && yarn build
USER node

EXPOSE 3003
CMD yarn serve
