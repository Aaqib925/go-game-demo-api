.PHONY: create-volumes

create-volumes:
	docker volume create gogame_api_postgres_data
	docker volume create gogame_api_redis_data
