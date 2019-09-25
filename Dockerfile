FROM node:10.15.3-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
COPY src ./src

RUN yarn install

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist

RUN chown -R node:node /app

USER node

RUN yarn install

EXPOSE 3000

CMD node dist/main.js