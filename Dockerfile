FROM nodejs:latest

RUN apt update && apt upgrade -y

COPY package.json /package.json
RUN cd /
RUN npm i
RUN mkdir /whatmybot
WORKDIR /whatmybot
COPY start.sh /start.sh

CMD ["/bin/bash", "/start.sh"]
