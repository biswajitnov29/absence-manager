#!/bin/bash
cd /home/ec2-user/server
sudo rm -r build/
yarn build
pm2 start server.js