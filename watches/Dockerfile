FROM node:10-slim

# direcotry where the node_modules will be installed.
WORKDIR /opt/node_app

#enable the unprivileged user of the official node image.
# USER node #ignore for now

# Copy the package.json & package-lock.json
COPY package*.json ./

#install npm modules.
RUN npm install && npm cache clean --force

# Set the PATH to include the installed npm bins.
ENV PATH /opt/node_app/node_modules/.bin:$PATH

# Change the directory to where the app files will be.
WORKDIR /opt/node_app/app

#Copy the needed app files.
COPY . .

CMD [ "node", "./bin/www" ]
