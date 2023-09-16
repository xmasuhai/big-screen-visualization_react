yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git push -u -f origin master &&
git push -u -f origin-1 master &&
cd ..