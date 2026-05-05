import { ImageBreak } from '@/components/image-break';
import { Section } from '@/components/section';
import { HomeConversionBlock } from './conversion';
import { HomeExplanationBlock } from './explanation';
import { HomeFactsBlock } from './facts';
import { homeImageBreaks } from './index';
import { HomeInfoBlock } from './info';
import { HomeLeadBlock } from './lead';
import { HomeStrengthsBlock } from './strengths';

type HomeSectionRole = 'lead' | 'explanation' | 'strengths' | 'facts' | 'info' | 'conversion';

const SECTION_LABEL: Record<HomeSectionRole, string> = {
  lead: '導入',
  explanation: 'ご案内',
  strengths: '強み・信頼',
  facts: '店舗・アクセス',
  info: '営業・ご利用案内',
  conversion: 'お問い合わせ',
};

const container = 'mx-auto w-full px-6 sm:px-8 lg:px-10';

export function HomePage() {
  return (
    <div class='text-base-content flex flex-col'>
      <Section class='w-full' id='home-section-lead' label={SECTION_LABEL.lead}>
        <HomeLeadBlock />
      </Section>

      <Section class='w-full' id='home-section-explanation' label={SECTION_LABEL.explanation}>
        <div class={`${container} max-w-4xl`}>
          <div class='reveal-on-scroll py-28 sm:py-36'>
            <HomeExplanationBlock />
          </div>
        </div>
      </Section>

      <ImageBreak {...homeImageBreaks[0]} />

      <Section
        class='w-full bg-base-200/50'
        id='home-section-strengths'
        label={SECTION_LABEL.strengths}
      >
        <div class={`${container} max-w-5xl`}>
          <div class='py-20 sm:py-28'>
            <HomeStrengthsBlock />
          </div>
        </div>
      </Section>

      <Section class='w-full' id='home-section-facts' label={SECTION_LABEL.facts}>
        <div class={`${container} max-w-5xl`}>
          <div class='reveal-on-scroll py-28 sm:py-36'>
            <HomeFactsBlock />
          </div>
        </div>
      </Section>

      <Section class='w-full bg-base-200/50' id='home-section-info' label={SECTION_LABEL.info}>
        <div class={`${container} max-w-5xl`}>
          <div class='reveal-on-scroll py-20 sm:py-28'>
            <HomeInfoBlock />
          </div>
        </div>
      </Section>

      <Section
        class='relative w-full'
        id='home-section-conversion'
        label={SECTION_LABEL.conversion}
      >
        <div class='absolute inset-0 bg-radial-[ellipse_at_center] from-primary/6 to-transparent' />
        <div class={`${container} relative max-w-lg`}>
          <div class='py-32 sm:py-40'>
            <HomeConversionBlock />
          </div>
        </div>
      </Section>
    </div>
  );
}
