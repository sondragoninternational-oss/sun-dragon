#!/data/data/com.termux/files/usr/bin/bash
# سكربت تشغيل تلقائي للنظام التجاري
cd ~/sun-dragon
# تشغيل أي خدمة أو مراقبة ملفات، مثال رفع تلقائي
# يمكن تعديل هذه الأوامر لتتوافق مع مشروعك
nohup python3 -m http.server 8000 > ~/sun-dragon/server.log 2>&1 &
