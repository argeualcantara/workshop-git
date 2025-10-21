FROM alpine

RUN apk update && apk add python

ENTRYPOINT ["python"]

