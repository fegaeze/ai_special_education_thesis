FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Copy Prisma schema (needed for prisma generate)
COPY prisma ./prisma/

# Install dependencies and generate Prisma client
RUN npm ci --only=production && npx prisma generate

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 4000

# Start the application
CMD ["npm", "start"] 