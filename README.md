# Microservices (POC)
## Description
This project focuses on trying many concepts relates to mircoservices using Node.js, Docker and Docker-compose.

## Content
Assuming we have an online store here for watches, mobiles, etc. 
Currently the project contains three services as follows:
1. Manager: is the manager service act as web service.
2. Watches: is the service handles requests relates to watches category.
3. mongo: watches database.

## Applied Concepts
1. Divide the project to smaller services.
2. Make them talk to each others.
3. Build a Dockerfile suits the production environment.
4. Build a docker-compose.yaml file suits the development environment.
5. Apply tricks relates to node_modules to acheive both host and container have their versions without conflicts.
6. Use volumes to mount the source codes, in addition to use (nodemon) on container, that makes it simple for container app
to restart upon on any code change.
7. Use environment variables.
8. Apply Health checkes concepts bared with depends on option to order the services and dependencies.

