# Docker Samples


## redis-node

Shows an example on using docker-compose to bootstrap a redis and nodejs application. The nodejs will link to the redis hostname through docker-compose `links`.


## Automate your development setup

If you are constantly creating a docker-compose and copying the file from here to your local, add this to your `.zshrc` instead:

```
alias init-db='svn export https://github.com/alextanhongpin/docker-samples/trunk/postgres/docker-compose.yml'
alias init-redis='svn export https://github.com/alextanhongpin/docker-samples/trunk/redis/docker-compose.yml'
```

This will clone the docker-compose file locally.
