FROM node:14

# Create working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle the source code
COPY . .

# Run
EXPOSE 8080
CMD ["npm", "start"]

