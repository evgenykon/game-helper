### To build project from zero:

#1 (if any changes in docker/Dockerfile.frontend.yml)
hub-build-push:
	docker buildx build -t effus/my:frontend_builder -f docker/Dockerfile.frontend.yml . && docker push "effus/my:frontend_builder"

#2 build images
build-images:
	docker-compose build

#3 build front
build-frontend:
	docker-compose run --rm builder bash -c "yarn install && yarn build"

#4 up containers
up:
	docker-compose up -d

down:
	docker-compose down

cmd:
	docker-compose run builder bash
