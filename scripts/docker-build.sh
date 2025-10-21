#!/bin/bash

docker login

docker build -t argeualcantara/workshop-git-service:$1 .

docker push argeualcantara/workshop-git-service:$1
