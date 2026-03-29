'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function TermsOfService() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const content = {
    ar: {
      title: 'شروط الخدمة',
      intro: 'باستخدام خدمات وكالة نضال وزيد ("نحن" أو "لنا")، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.',
      intro2: 'تعكس هذه الشروط التزامنا بإجراء الأعمال وفقاً للمبادئ الإسلامية للعدالة والشفافية والسلوك الأخلاقي.',
      sections: [
        {
          title: '1. وصف الخدمات',
          content: 'توفر وكالة نضال وزيد خدمات تسويق المؤثرين الحلال، بما في ذلك:',
          items: ['اكتشاف المؤثرين وتسهيل الشراكات', 'تطوير استراتيجية الحملة وتنفيذها', 'إنشاء المحتوى وإدارته للجماهير المسلمة', 'الإعلانات الحلال وإدارة الوسائط المدفوعة', 'استشارات العلامة التجارية وتموضع السوق', 'التحليلات وتقارير الأداء']
        },
        {
          title: '2. مسؤوليات العميل',
          content: 'كعميل لوكالة نضال وزيد، توافق على:',
          items: ['تقديم معلومات دقيقة وكاملة عن علامتك التجارية ومنتجاتك', 'ضمان أن جميع المنتجات والخدمات المروجة معتمدة حلال أو متوافقة مع الشريعة', 'الرد بسرعة على اتصالات فريقنا', 'تقديم الموافقات اللازمة ضمن الأطر الزمنية المتفق عليها', 'عدم الانخراط في أي نشاط ينتهك المبادئ أو القيم الإسلامية']
        },
        {
          title: '3. معايير التوافق الحلال',
          content: 'جميع الخدمات التي تقدمها وكالة نضال وزيد تلتزم بمعايير صارمة للتواكب الحلال:',
          items: ['يجب أن يتوافق جميع المحتوى مع القيم والمبادئ الإسلامية', 'لا ترويج للكحول أو القمار أو المنتجات القائمة على الفائدة (الربا) أو أنشطة حرام أخرى', 'يجب أن يكون المحتوى محتشماً ومحترماً ومناسباً ثقافياً', 'اختيار المؤثرين على أساس التوافق مع القيم الإسلامية']
        },
        {
          title: '4. التسعير والدفع',
          content: 'شروط الدفع:',
          items: ['يتم الاتفاق على التسعير قبل بدء الحملة', 'قد يُطلب وديعة قبل بدء العمل', 'يتم تحديد جداول الدفع في العقود الفردية', 'قد تؤدي المدفوعات المتأخرة إلى رسوم إضافية']
        },
        {
          title: '5. الملكية الفكرية',
          content: 'المحتوى الذي يتم إنشاؤه خصيصاً لحملتك يصبح ملكاً لك عند الدفع الكامل. يحتفظ المحتوى الذي ينشئه المؤثرون بآليات اتفاقيات منفصلة مع منشئي المحتوى.',
          items: []
        },
        {
          title: '6. السرية',
          content: 'يوافق كلا الطرفين على الحفاظ على سرية:',
          items: ['استراتيجيات العمل وخطط التسويق', 'المعلومات المالية والتسعير', 'بيانات العملاء والعملاء المحتملين', 'أسرار التجارة والمعلومات الخاصة']
        },
        {
          title: '7. حل النزاعات',
          content: 'وفقاً للمبادئ الإسلامية للعدالة والإنصاف، يتم حل النزاعات من خلال:',
          items: ['التفاوض المباشر: سيحاول الطرفان أولاً حل النزاعات من خلال مناقشة حسنة النية', 'الوساطة: إذا فشل التفاوض، يمكن الاستعانة بوسيط محايد', 'التحكيم: الحل النهائي من خلال التحكيم الملزم']
        },
        {
          title: '8. الاتصال',
          content: 'للأسئلة حول شروط الخدمة هذه:',
          items: []
        }
      ],
      acceptance: 'باستخدام خدماتنا أو تقديم استفسار، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بشروط الخدمة هذه.',
      blessing: 'جَزَاكَ اللّٰهُ خَيْرًا'
    },
    en: {
      title: 'Terms of Service',
      intro: 'By accessing or using the services provided by NidZid Agency ("we," "our," or "us"), you agree to be bound by these Terms of Service.',
      intro2: 'These terms reflect our commitment to conducting business in accordance with Islamic principles of fairness, transparency, and ethical conduct.',
      sections: [
        {
          title: '1. Services Description',
          content: 'NidZid Agency provides halal influencer marketing services, including:',
          items: ['Influencer discovery and partnership facilitation', 'Campaign strategy development and execution', 'Content creation and management for Muslim audiences', 'Halal advertising and paid media management', 'Brand consulting and market positioning', 'Analytics and performance reporting']
        },
        {
          title: '2. Client Responsibilities',
          content: 'As a client of NidZid Agency, you agree to:',
          items: ['Provide accurate and complete information about your brand', 'Ensure all products promoted are halal-certified or Shariah-compliant', 'Respond promptly to communications from our team', 'Provide necessary approvals within agreed timeframes', 'Not engage in any activity that violates Islamic principles']
        },
        {
          title: '3. Halal Compliance Standards',
          content: 'All services provided adhere to strict halal compliance standards:',
          items: ['All content must align with Islamic values and principles', 'No promotion of alcohol, gambling, riba, or haram activities', 'Content should be modest, respectful, and culturally appropriate', 'Influencer selection based on Islamic values alignment']
        },
        {
          title: '4. Pricing and Payment',
          content: 'Payment Terms:',
          items: ['Pricing is agreed upon before campaign commencement', 'A deposit may be required before work begins', 'Payment schedules are outlined in individual contracts', 'Late payments may incur additional fees']
        },
        {
          title: '5. Intellectual Property',
          content: 'Content created specifically for your campaign becomes your property upon full payment. Influencer-generated content remains subject to separate agreements.',
          items: []
        },
        {
          title: '6. Confidentiality',
          content: 'Both parties agree to maintain the confidentiality of:',
          items: ['Business strategies and marketing plans', 'Financial information and pricing', 'Customer and prospect data', 'Trade secrets and proprietary information']
        },
        {
          title: '7. Dispute Resolution',
          content: 'In accordance with Islamic principles of justice and fairness, disputes shall be resolved through:',
          items: ['Direct Negotiation: Parties will first attempt good-faith discussion', 'Mediation: A neutral third-party mediator may be engaged', 'Arbitration: Final resolution through binding arbitration']
        },
        {
          title: '8. Contact Information',
          content: 'For questions about these Terms of Service:',
          items: []
        }
      ],
      acceptance: 'By using our services or submitting an inquiry, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.',
      blessing: ''
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
                {section.title.includes('8') && (
                  <div className={`bg-gray-50 rounded-lg p-6 mt-4 ${isRTL ? 'text-right' : ''}`}>
                    <p className="font-semibold text-[#1B4332]">{isRTL ? 'وكالة نضال وزيد' : 'NidZid Agency'}</p>
                    <p>{isRTL ? 'البريد: ' : 'Email: '}<a href="mailto:nidhalzidi@nidzid.site" className="text-[#D4AF37] hover:underline">nidhalzidi@nidzid.site</a></p>
                    <p>{isRTL ? 'الهاتف: +971 52 450 5803 (الإمارات) | +216 22 607 030 (تونس)' : 'Phone: +971 52 450 5803 (UAE) | +216 22 607 030 (Tunisia)'}</p>
                    <p>{isRTL ? 'الموقع: سوسة، تونس | دبي، الإمارات' : 'Location: Sousse, Tunisia | Dubai, UAE'}</p>
                  </div>
                )}
              </section>
            ))}

            <section>
              <h2 className="text-xl font-bold text-[#1B4332] mt-8 mb-4">
                {isRTL ? '9. القبول' : '9. Acceptance'}
              </h2>
              <p>{t.acceptance}</p>
              {t.blessing && (
                <p className="text-[#D4AF37] font-semibold mt-4">{t.blessing}</p>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
