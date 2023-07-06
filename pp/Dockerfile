# Use the official Node.js 16 image from Docker Hub
FROM node:16

# Copy all files into the image
COPY . .

# Install dependencies for the server
RUN npm install

# Build the React app (if located in the root directory)
RUN npm run build

# Install pm2 globally
RUN npm install -g pm2

# Start the server with pm2
CMD ["pm2-runtime", "server.js"]
