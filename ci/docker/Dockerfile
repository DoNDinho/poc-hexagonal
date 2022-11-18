FROM node:16-alpine AS base

RUN apk add --no-cache git

FROM base AS development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development --loglevel verbose

FROM development AS builder

COPY . .
RUN npm run build

FROM base AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
COPY --from=builder /usr/src/app/dist ./dist
CMD ["node", "dist/index"]