#!/bin/bash

echo What should the version be?
read version

docker build -t tomimarkus110/yt-clone:$version .
docker push tomimarkus110/yt-clone:$version

ssh root@157.230.101.183 "
docker pull tomimarkus110/yt-clone:$version &&
docker tag tomimarkus110/yt-clone:$version dokku/yt-clone:$version &&
dokku tags:deploy yt-clone $version
"

