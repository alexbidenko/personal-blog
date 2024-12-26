FROM oven/bun:1-alpine AS dependencies

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

FROM oven/bun:1-alpine AS build

WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN bun run build

FROM oven/bun:1-alpine

WORKDIR /app

COPY --from=build --chown=bun:bun /app/.output .

USER bun

CMD  ["bun", "run", "server/index.mjs"]
