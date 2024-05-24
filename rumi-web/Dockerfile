
# Use the official Node.js image as the base image
FROM node:latest as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json if you have them
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Build the Next.js app
RUN npm run build

#Use the official Nginx image
FROM nginx:latest

# Copy the build output to the Nginx HTML directory
RUN cp -r .next /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]