FROM node
MAINTAINER Sean Payne <seantpayne@gmail.com>

ENV EXPRESS_ENV development

ADD . /webhookit

RUN cd /webhookit && \
  npm install .

VOLUME ["/webhookit/config"]
WORKDIR /webhookit
CMD ["node", "server.js"]

EXPOSE 80
