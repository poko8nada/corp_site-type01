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

const container = 'mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10';

export function HomePage() {
  return (
    <div class='text-base-content flex flex-col'>
      <Section class='w-full' id='home-section-lead' label={SECTION_LABEL.lead}>
        <HomeLeadBlock />
      </Section>

      <Section
        class='w-full home-divider section-pad-relaxed'
        id='home-section-explanation'
        label={SECTION_LABEL.explanation}
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:40ms]'>
            <HomeExplanationBlock />
          </div>
        </div>
      </Section>

      <div class='home-divider'>
        <ImageBreak {...homeImageBreaks[0]} />
      </div>

      <Section
        class='w-full bg-surface-warm home-divider section-pad-relaxed'
        id='home-section-strengths'
        label={SECTION_LABEL.strengths}
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <HomeStrengthsBlock />
          </div>
        </div>
      </Section>

      <Section
        class='w-full home-divider section-pad-relaxed'
        id='home-section-facts'
        label={SECTION_LABEL.facts}
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <HomeFactsBlock />
          </div>
        </div>
      </Section>

      <Section
        class='w-full bg-surface-soft home-divider section-pad-compact'
        id='home-section-info'
        label={SECTION_LABEL.info}
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:80ms]'>
            <HomeInfoBlock />
          </div>
        </div>
      </Section>

      <Section
        class='relative w-full home-divider section-pad-relaxed overflow-hidden'
        id='home-section-conversion'
        label={SECTION_LABEL.conversion}
      >
        <div class='absolute inset-0 cta-surface' />
        <div class={`${container} relative max-w-lg`}>
          <HomeConversionBlock />
        </div>
      </Section>
    </div>
  );
}
