# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Run node server (Angular SSR)

CMD node /usr/local/app/dist/oscarprince/server/server.mjs

# Expose port 4000
EXPOSE 4000