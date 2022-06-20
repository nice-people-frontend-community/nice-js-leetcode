set -e

yarn build
printf "打包成功\n"

cd docs/.vuepress/dist

git init
git checkout -b dist
git add -A
git commit -m 'deploy'
printf "本地提交成功\n"
# git push -f  dist
git push -f https://github.com/nice-people-frontend-community/nice-js-leetcode.git dist

printf "dist目录上传成功\n"
