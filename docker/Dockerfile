FROM node:latest

RUN npm install -g learnyounode

ADD run-exercise.sh /root/run-exercise.sh
RUN chmod 700 /root/run-exercise.sh

CMD [ "/root/run-exercise.sh" ]
