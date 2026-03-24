# 🚀 دليل نشر NidZid Agency على Vercel

## الخطوة 1: إضافة متغير البيئة RESEND_API_KEY

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اختر مشروع **nidzid-agency** (أو أنشئ مشروع جديد)
3. اذهب إلى **Settings** > **Environment Variables**
4. أضف متغير جديد:
   - **Name**: `RESEND_API_KEY`
   - **Value**: مفتاح API من [resend.com](https://resend.com)
5. اضغط **Save**

## الخطوة 2: الحصول على مفتاح Resend API (مجاني)

1. اذهب إلى [resend.com](https://resend.com)
2. سجل حساب جديد (مجاني)
3. من Dashboard، اذهب إلى **API Keys**
4. اضغط **Create API Key**
5. انسخ المفتاح وألصقه في Vercel

## الخطوة 3: النشر

### الخيار A: من Vercel Dashboard (الأسهل)
1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط **Add New** > **Project**
3. اربط مستودع GitHub أو ارفع المجلد
4. اضغط **Deploy**

### الخيار B: من سطر الأوامر
```bash
# تسجيل الدخول
npx vercel login

# النشر
npx vercel --prod
```

## 🔗 روابط مهمة

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Resend Dashboard**: https://resend.com
- **مشروع NidZid الحالي**: https://nidzid-halal-agency.vercel.app

## 📧 كيف يعمل نظام الإيميل

عندما يضغط المستخدم "Send via Email":
1. ✅ تُحفظ البيانات في قاعدة البيانات
2. ✅ يُرسل إيميل إلى `nidhalzidi@nidzid.site`
3. ✅ يُرسل إيميل تأكيد للعميل

## ⚠️ ملاحظة

بدون مفتاح Resend API:
- البيانات تُحفظ في قاعدة البيانات ✅
- الإيميلات **لا** تُرسل ❌

مع المفتاح:
- كل شيء يعمل بشكل كامل ✅
