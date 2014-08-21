FROM node:latest

RUN npm install -g learnyounode && \
    mkdir /.config && \
    chown -R nobody /.config

WORKDIR /var/tmp

ADD run-exercise.sh /var/tmp/run-exercise.sh

RUN chmod 755 /var/tmp/run-exercise.sh

USER nobody

CMD [ "/var/tmp/run-exercise.sh" ]
