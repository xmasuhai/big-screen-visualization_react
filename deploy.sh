yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:xmasuhai/big-screen-demo-website-1.git &&
git remote add origin-1 git@gitee.com:xmasuhai/big-screen-demo-1.git &&
git push -u -f origin master &&
cd ..