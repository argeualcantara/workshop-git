#!/bin/bash

git checkout main
git pull origin main
git tag -a "$1" -m "Versão inicial"
git push origin --tags
