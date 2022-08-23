FROM nodejs:latest

RUN apt update && apt upgrade -y

RUN 

COPY package.json /package.json
RUN cd /
RUN pip3 install -U -r requirements.txt
RUN mkdir /whatmybot
WORKDIR /whatmybot
COPY start.sh /start.sh

CMD ["/bin/bash", "/start.sh"]
