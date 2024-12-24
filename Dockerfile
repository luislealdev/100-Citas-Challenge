FROM node:22

WORKDIR /src

COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run dev

EXPOSE 3000

CMD ["npm", "start"]