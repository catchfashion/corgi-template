FROM node:14.17

MAINTAINER Kurt Lee "kurt@catchfashion.com"

# Install system programs
RUN apt-get update && apt-get install -y zip build-essential curl openjdk-8-jdk memcached jq && apt-get clean

# Install Redis
RUN cd /tmp && \
    mkdir redis-build && \
    wget http://download.redis.io/releases/redis-3.2.11.tar.gz && \
    tar xvfz redis-3.2.11.tar.gz && \
    cd redis-3.2.11 && \
    make && \
    make install && \
    cd ~ && \
    rm -rf /tmp/redis-build

# # Install npm 5 in order to use package-lock.json
# RUN curl -L https://npmjs.org/install.sh | sh
RUN npm install -g npm@6.14.15

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
