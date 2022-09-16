#!/bin/bash
cd /home/ec2-user/server
yarn install
yarn add --save react react-dom react-scripts react-particles-js
yarn global add pm2