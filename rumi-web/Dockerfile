# Use the official Node.js image as the base image for the build stage
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use Nginx as the base image for serving the application
FROM nginx:alpine

# Copy the built Next.js app from the previous stage to the Nginx server
COPY --from=build /app/.next /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

