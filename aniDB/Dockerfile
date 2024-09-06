FROM node:18

WORKDIR /app

RUN git clone https://oauth2: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@github.com/daumtto53/aniDB_frontend.git .

COPY .env /app/aniDB/.env

WORKDIR /app/aniDB

RUN npm install

EXPOSE 3000
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
