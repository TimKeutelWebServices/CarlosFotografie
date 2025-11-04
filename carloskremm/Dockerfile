# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS deps
RUN corepack enable

COPY base/ /workspace/base/
COPY carloskremm/ /workspace/carloskremm/

WORKDIR /workspace/base
RUN yarn install --network-timeout 100000

WORKDIR /workspace/carloskremm
RUN yarn install --network-timeout 100000 

FROM node:22-alpine AS build
RUN corepack enable

COPY --from=deps /workspace/base/ /workspace/base
COPY --from=deps /workspace/carloskremm/ /workspace/carloskremm 

WORKDIR /workspace/base
RUN yarn build

WORKDIR /workspace/carloskremm
RUN yarn build

FROM node:22-alpine AS runner
COPY --from=build /workspace/carloskremm/.output /app/

ENV PORT=80 \
    NITRO_PORT=80 \
    HOST=0.0.0.0
EXPOSE 80

WORKDIR /app
CMD ["node", "server/index.mjs"]