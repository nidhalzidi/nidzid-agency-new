'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function FAQ() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: isRTL 
        ? 'ما الذي يميز وكالة نضال زيد عن وكالات المؤثرين الأخرى؟'
        : 'What makes NidZid Agency different from other influencer marketing agencies?',
      answer: isRTL
        ? 'نحن أول وكالة متخصصة في تسويق المؤثرين الحلال. فريقنا مملوك ويديره مسلمون، مما يمنحنا فهماً أصيلاً للقيم الإسلامية وسلوك المستهلك المسلم. تخضع جميع حملاتنا لمراجعة التوافق مع الشريعة. لدينا وصول إلى شبكة موثقة من أكثر من 500 مؤثر مسلم عبر جميع المنصات الرئيسية.'
        : 'NidZid Agency is the first influencer marketing agency dedicated exclusively to the halal market. We specialize in connecting brands with Muslim consumers through authentic, Shariah-compliant campaigns. Our team consists of Muslims who deeply understand Islamic values, ensuring all content aligns with halal principles. We have access to a verified network of 500+ Muslim influencers across all major platforms.',
    },
    {
      question: isRTL 
        ? 'كيف تضمنون توافق الحملات مع الشريعة؟'
        : 'How do you ensure your campaigns are Shariah-compliant?',
      answer: isRTL
        ? 'تخضع كل حملة للمراجعة من قبل فريقنا للتوافق مع المبادئ الإسلامية. نضمن أن المحتوى يتجنب العناصر المحرمة، ويستخدم لغة مناسبة، ويحترم القيم الإسلامية. نعمل أيضاً مع العلماء عند الحاجة.'
        : 'Every campaign is reviewed by our team for compliance with Islamic principles. We ensure content avoids haram elements, uses appropriate language, and respects Islamic values. We also work with scholars when needed.',
    },
    {
      question: isRTL 
        ? 'ما أنواع المؤثرين الذين تعملون معهم؟'
        : 'What types of influencers do you work with?',
      answer: isRTL
        ? 'نعمل مع مؤثرين مسلمين عبر جميع المنصات بما في ذلك Instagram وTikTok وYouTube وLinkedIn وTwitter. تشمل شبكتنا مؤثرين نانو ومايكرو وماكرو وميقا عبر مختلف المجالات.'
        : 'We work with Muslim influencers across all platforms including Instagram, TikTok, YouTube, LinkedIn, and Twitter. Our network includes nano, micro, macro, and mega influencers across various niches.',
    },
    {
      question: isRTL 
        ? 'ما هي الصناعات التي تتخصصون فيها؟'
        : 'Which industries do you specialize in?',
      answer: isRTL
        ? 'نتخصص في خمسة صناعات حلال رئيسية: التمويل الإسلامي، الغذاء الحلال، الموضة المحتشمة، السفر الإسلامي، ومستحضرات التجميل الحلال. لدينا خبرة عميقة في كل قطاع.'
        : 'We specialize in five main halal industries: Islamic Finance, Halal Food, Modest Fashion, Muslim Travel, and Halal Cosmetics. We have deep expertise in each vertical.',
    },
    {
      question: isRTL 
        ? 'ما هو نموذج التسعير الخاص بكم؟'
        : 'What is your pricing model?',
      answer: isRTL
        ? 'نقدم نماذج تسعير مرنة تشمل الخيارات القائمة على المشروع والاحتفاظ والأداء. كل حملة مخصصة بناءً على أهدافك وميزانيتك.'
        : 'We offer flexible pricing models including project-based, retainer, and performance-based options. Each campaign is customized based on your goals and budget.',
    },
    {
      question: isRTL 
        ? 'كم تستغرق الحملة النموذجية؟'
        : 'How long does a typical campaign take?',
      answer: isRTL
        ? 'تختلف مدة الحملة بناءً على النطاق والأهداف. عادة ما تستمر حملة المؤثرين النموذجية من 4 إلى 8 أسابيع، بينما قد تمتد الحملات الأكبر لعدة أشهر.'
        : 'Campaign duration varies based on scope and objectives. A typical influencer campaign runs 4-8 weeks, while larger campaigns may span several months.',
    },
    {
      question: isRTL 
        ? 'هل تعملون مع علامات خارج العالم الإسلامي؟'
        : 'Do you work with brands outside the Muslim world?',
      answer: isRTL
        ? 'نعم، نعمل مع علامات عالمياً تريد الوصول إلى المستهلكين المسلمين بصدق. نساعد العلامات غير المسلمة في التنقل في الحساسيات الثقافية والتواصل بصدق مع هذا الجمهور.'
        : 'Yes, we work with brands globally who want to reach Muslim consumers authentically. We help non-Muslim brands navigate cultural sensitivities and connect genuinely with this audience.',
    },
    {
      question: isRTL 
        ? 'كيف أبدأ؟'
        : 'How do I get started?',
      answer: isRTL
        ? 'ببساطة املأ نموذج الاتصال أو تواصل عبر واتساب. سنحدد موعد مكالمة استكشافية لفهم احتياجاتك واقتراح استراتيجية مخصصة.'
        : 'Simply fill out our contact form or reach out via WhatsApp. We\'ll schedule a discovery call to understand your needs and propose a tailored strategy.',
    },
  ]

  return (
    <section id="faq" className={`py-20 lg:py-28 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            {isRTL ? 'الأسئلة الشائعة' : 'FAQ'}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {isRTL ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL 
              ? 'ابحث عن إجابات للأسئلة الشائعة حول خدمات تسويق المؤثرين الحلال.'
              : 'Find answers to common questions about our halal influencer marketing services.'
            }
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#D4AF37] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="font-semibold text-[#1B4332] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#D4AF37] transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className={`px-6 pb-5 ${isRTL ? 'text-right' : ''}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {isRTL ? 'لا تزال لديك أسئلة؟ نحن هنا للمساعدة!' : "Still have questions? We're here to help!"}
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-lg transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {isRTL ? 'تواصل مع فريقنا' : 'Contact Our Team'}
          </a>
        </div>
      </div>
    </section>
  )
}
