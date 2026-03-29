'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function PrivacyPolicy() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const content = {
    ar: {
      title: 'سياسة الخصوصية',
      intro: 'وكالة نضال وزيد ("نحن" أو "لنا") ملتزمة بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والإفصاح عن معلوماتك وحمايتها عند زيارة موقعنا الإلكتروني واستخدام خدماتنا.',
      intro2: 'نحن نعمل وفقاً للمبادئ الإسلامية للثقة والشفافية والممارسات التجارية الأخلاقية. خصوصيتك حق أساسي نحترمه ونحميه.',
      sections: [
        {
          title: '1. المعلومات التي نجمعها',
          content: 'عند الاتصال بنا أو استخدام خدماتنا، قد نجمع:',
          items: ['الاسم الكامل وعنوان البريد الإلكتروني', 'اسم الشركة ومعلومات القطاع', 'رقم الهاتف (إذا تم تقديمه)', 'متطلبات المشروع ومعلومات الميزانية', 'أي معلومات أخرى تقدمها طوعاً']
        },
        {
          title: '2. كيف نستخدم معلوماتك',
          content: 'نستخدم المعلومات التي نجمعها من أجل:',
          items: ['الرد على استفساراتك وتقديم دعم العملاء', 'معالجة وإدارة طلبات حملتك', 'إرسال تحديثات ذات صلة حول خدماتنا', 'تحسين موقعنا وخدماتنا', 'الامتثال للالتزامات القانونية']
        },
        {
          title: '3. مشاركة المعلومات والإفصاح',
          content: 'لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الظروف التالية:',
          items: ['مع المؤثرين: عند الاستفادة من خدماتنا', 'مقدمو الخدمات: مع أطراف ثالثة موثوقة', 'المتطلبات القانونية: عندما يقتضي القانون ذلك']
        },
        {
          title: '4. أمن البيانات',
          content: 'ننفذ تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية:',
          items: ['تشفير البيانات أثناء النقل وفي حالة السكون', 'بنية تحتية آمنة للخادم', 'تقييمات أمنية منتظمة', 'وصول محدود للمعلومات الشخصية']
        },
        {
          title: '5. حقوقك',
          content: 'لديك الحق في:',
          items: ['الوصول: طلب نسخة من المعلومات الشخصية', 'التصحيح: طلب تصحيح المعلومات غير الدقيقة', 'الحذف: طلب حذف معلوماتك الشخصية', 'الاعتراض: الاعتراض على معالجة معلوماتك']
        },
        {
          title: '6. ملفات تعريف الارتباط',
          content: 'نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربتك على موقعنا:',
          items: ['ملفات تعريف ضرورية: مطلوبة لوظائف الموقع الأساسية', 'ملفات تعريف تحليلية: تساعدنا على فهم كيفية استخدام الزوار لموقعنا', 'ملفات تعريف تسويقية: تُستخدم لتقديم إعلانات ذات صلة']
        },
        {
          title: '7. الاتصال بنا',
          content: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه:',
          items: []
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      intro: 'NidZid Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.',
      intro2: 'We operate in accordance with Islamic principles of trust, transparency, and ethical business practices.',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'When you contact us or use our services, we may collect:',
          items: ['Your full name and email address', 'Company name and industry information', 'Phone number (if provided)', 'Project requirements and budget information', 'Any other information you voluntarily provide']
        },
        {
          title: '2. How We Use Your Information',
          content: 'We use the information we collect to:',
          items: ['Respond to your inquiries and provide customer support', 'Process and manage your campaign requests', 'Send you relevant updates about our services', 'Improve our website and services', 'Comply with legal obligations']
        },
        {
          title: '3. Information Sharing and Disclosure',
          content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in:',
          items: ['With Influencers: When you engage our services', 'Service Providers: With trusted third parties', 'Legal Requirements: When required by law']
        },
        {
          title: '4. Data Security',
          content: 'We implement appropriate security measures to protect your personal information:',
          items: ['Encryption of data in transit and at rest', 'Secure server infrastructure', 'Regular security assessments', 'Limited access to personal information']
        },
        {
          title: '5. Your Rights',
          content: 'You have the right to:',
          items: ['Access: Request a copy of your personal information', 'Correction: Request correction of inaccurate information', 'Deletion: Request deletion of your personal information', 'Objection: Object to processing of your personal information']
        },
        {
          title: '6. Cookies and Tracking',
          content: 'We use cookies and similar tracking technologies:',
          items: ['Essential Cookies: Required for basic website functionality', 'Analytics Cookies: Help us understand visitor usage', 'Marketing Cookies: Used to deliver relevant advertisements']
        },
        {
          title: '7. Contact Us',
          content: 'If you have any questions about this Privacy Policy:',
          items: []
        }
      ]
    }
  }

  const t = isRTL ? content.ar : content.en

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className={`inline-flex items-center gap-2 text-[#1B4332] hover:text-[#D4AF37] font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
            <ArrowLeft className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <h1 className={`text-3xl lg:text-4xl font-bold text-[#1B4332] mb-2 ${isRTL ? 'text-right' : ''}`}>
            {t.title}
          </h1>
          <p className={`text-gray-500 mb-8 ${isRTL ? 'text-right' : ''}`}>
            {isRTL ? 'آخر تحديث: ' : 'Last updated: '}
            {new Date().toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className={`prose prose-lg max-w-none text-gray-600 space-y-6 ${isRTL ? 'text-right' : ''}`}>
            <p>{t.intro}</p>
            <p>{t.intro2}</p>

            {t.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">{section.title}</h2>
                <p className="mb-4">{section.content}</p>
                {section.items.length > 0 && (
                  <ul className={`list-disc space-y-2 ${isRTL ? 'pr-6' : 'pl-6'}`}>
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.title.includes('7') && (
                  <div className={`bg-gray-50 rounded-lg p-6 mt-4 ${isRTL ? 'text-right' : ''}`}>
                    <p className="font-semibold text-[#1B4332]">{isRTL ? 'وكالة نضال وزيد' : 'NidZid Agency'}</p>
                    <p>{isRTL ? 'البريد: ' : 'Email: '}<a href="mailto:nidhalzidi@nidzid.site" className="text-[#D4AF37] hover:underline">nidhalzidi@nidzid.site</a></p>
                    <p>{isRTL ? 'الهاتف: +971 52 450 5803 (الإمارات) | +216 22 607 030 (تونس)' : 'Phone: +971 52 450 5803 (UAE) | +216 22 607 030 (Tunisia)'}</p>
                    <p>{isRTL ? 'الموقع: سوسة، تونس | دبي، الإمارات' : 'Location: Sousse, Tunisia | Dubai, UAE'}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
