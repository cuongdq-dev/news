# Stage 1: Build the application
FROM node:20-bullseye-slim AS builder

WORKDIR /app

# Copy package.json and yarn.lock to use Docker cache
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --network-timeout 1000000

# Copy the rest of the code
COPY . ./

# Build Astro static site
RUN yarn build

# Stage 2: Serve with Nginx
FROM nginx:1.27.2-alpine-slim

# Copy Nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy static build files to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web server
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
