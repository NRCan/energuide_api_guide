FROM node:carbon
MAINTAINER Mike Williamson <mike.williamson@tbs-sct.gc.ca>
LABEL Description="Government of Canada NRCAN Proof of Concept"

WORKDIR /app
#USER node
ADD . .

RUN yarn install && yarn build
USER node

EXPOSE 3003
CMD yarn serve
