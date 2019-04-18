immatureName
imamatureDescription
一个自己的常用方法库  一点基本git操作

新建分支并切换到新的分支
git checkout -b develop

推送本地分支到远程分支（这里本地与远程同名）
git push origin develop:develop

删除远程分支
git push origin --delete develop

合并分支(假设当前有两个分支 master和develop,当前所在分支master，需要合并develop到master)
git merge develop

git push -u origin develop

test
git branch --set-upstream-to=origin/develop

git branch --unset-upstream master
