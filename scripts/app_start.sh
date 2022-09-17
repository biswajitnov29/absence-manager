#!/bin/bash
cd /home/ec2-user/server
sudo rm -r build/
npm run build
npm run server