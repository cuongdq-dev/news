# Build Stage
FROM node:20-bullseye AS builder
WORKDIR /app

# Cài dependencies (không bỏ qua optional dependencies)
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

# Copy source code & build
COPY . .
RUN npm run build

# Runtime Stage (Dùng Alpine nhẹ hơn)
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

EXPOSE 5000
CMD ["node", "dist/server/entry.mjs"]
