###
build:
	docker-compose build
# 1
up:
	docker-compose up -d
# 2
down:
	docker-compose down
# 3
front:
	docker exec -it front bash
