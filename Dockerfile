# Use official Node LTS
FROM node:18-alpine


# Create app dir
WORKDIR /usr/src/app


# Copy package files first (for caching)
COPY package*.json ./


# Install deps
RUN npm ci --only=production


# Copy app sources
COPY . .


# Expose port and start
EXPOSE 3000
CMD ["node", "app.js"]
