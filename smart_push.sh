#!/bin/bash
cd ~/sun-dragon

# تحقق من وجود تغييرات
if [[ -n $(git status --porcelain) ]]; then
    git add .
    git commit -m "Auto upload: $(date '+%Y-%m-%d %H:%M:%S')"
    if git push; then
        echo "✅ الملفات الجديدة تم رفعها بنجاح!"
    else
        echo "❌ حدث خطأ أثناء رفع الملفات!"
    fi
else
    echo "ℹ️ لا توجد تغييرات جديدة للرفع."
fi
