# Use the official Node.js 16 image from Docker Hub
FROM node:16

# Copy all files into the image
COPY . .

# Install dependencies
RUN npm install

# Go into the client directory, install dependencies and build the React app
WORKDIR /pp
RUN npm install && npm run build

# Set the working directory back to the root directory
WORKDIR /..

# Install pm2 globally
RUN npm install -g pm2

# Start the server with pm2
CMD ["pm2-runtime", "start", "server.js"]
