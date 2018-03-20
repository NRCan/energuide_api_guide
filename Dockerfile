FROM node:carbon
MAINTAINER Mike Williamson <mike.williamson@tbs-sct.gc.ca>

WORKDIR /app
#USER node
ADD . .

RUN yarn install && yarn build
USER node

EXPOSE 3003
CMD yarn serve
