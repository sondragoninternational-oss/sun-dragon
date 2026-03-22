#!/bin/bash
cd ~/sun-dragon
while true; do
  if [[ -n $(git status --porcelain) ]]; then
    git add .
    git commit -m "Auto upload: $(date '+%Y-%m-%d %H:%M:%S')"
    git push
  fi
  sleep 60
done
