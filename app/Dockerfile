# Stage 1: Build dependencies
FROM node:18 AS builder

WORKDIR /app

# Install only dependencies
COPY package.json package-lock.json* ./
RUN npm install --only=production

# Copy app source
COPY . .

# ----------------------------

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy only required files from builder
COPY --from=builder /app /app

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "index.js"]
