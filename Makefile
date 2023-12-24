###
build-images:
	docker-compose build

build-frontend:
	docker-compose run builder bash -c "yarn install && yarn build"

build-github:
	docker-compose run builder bash -c "yarn install && yarn build && cp -R /home/app/.output /home/repo/.output"


up:
	docker-compose up -d

down:
	docker-compose down

cmd:
	docker-compose run builder bash
