### To build project from zero:

##1 (if any changes in docker/Dockerfile.frontend.yml)
#container-build:
#	docker buildx build -f docker/Dockerfile.frontend.yml frontend

#2 build docker images
build-docker:
	docker-compose build

#3 build front
build-frontend:
	docker-compose run --rm builder bash -c "yarn install && yarn build"

#4 up containers
up:
	docker-compose up -d

down:
	docker-compose down

dev:
	docker-compose up front-dev

cmd:
	docker-compose run --rm builder bash
