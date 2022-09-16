#!/bin/bash
cd /home/ec2-user/server
yarn config set ignore-engines true
yarn install
yarn add --save react react-dom react-scripts react-particles-js
yarn global add pm2