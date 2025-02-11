# Stage 1: Build ứng dụng
FROM node:20-alpine AS builder  

WORKDIR /app

# Copy file package.json và yarn.lock để tối ưu cache layer
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 1000000

# Copy toàn bộ code
COPY . ./

# Build ứng dụng
RUN yarn build && yarn cache clean  

# Stage 2: Chạy ứng dụng
FROM node:20-alpine  

WORKDIR /app

# Copy build từ stage trước
COPY --from=builder /app ./

# Expose cổng ứng dụng (đổi nếu cần)
EXPOSE 5000

# Chạy ứng dụng
CMD ["node", "dist/server/entry.mjs"]
