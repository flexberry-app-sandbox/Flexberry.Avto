docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avto-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t avto-java/app ../../..
