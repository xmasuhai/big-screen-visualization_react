#!/usr/bin/env sh
rm -rf dist &&
yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:xmasuhai/big-screen-demo-website-1.git &&
git remote add origin-2 git@github.com:xmasuhai/big-screen-demo-website-1.git &&
git push -u -f origin master &&
git push -u -f origin-2 master &&
cd ..
echo https://xmasuhai.xyz/big-screen-demo-website-1/#/