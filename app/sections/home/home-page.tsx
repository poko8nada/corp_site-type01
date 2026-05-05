import { ImageBreak } from '@/components/image-break';
import { Section } from '@/components/section';
import { HomeConversionBlock } from './conversion';
import { HomeExplanationBlock } from './explanation';
import { HomeFactsBlock } from './facts';
import { homeImageBreaks } from './index';
import { HomeLeadBlock } from './lead';
import { HomeStrengthsBlock } from './strengths';

type HomeSectionRole = 'lead' | 'explanation' | 'strengths' | 'facts' | 'conversion';

const SECTION_LABEL: Record<HomeSectionRole, string> = {
  lead: '導入',
  explanation: 'ご案内',
  strengths: '強み・信頼',
  facts: '店舗情報',
  conversion: 'お問い合わせ',
};

const container = 'mx-auto w-full px-6 sm:px-8 lg:px-10';
const vPad = 'py-24 sm:py-32';

export function HomePage() {
  return (
    <div class='text-base-content flex flex-col'>
      <Section class='w-full' id='home-section-lead' label={SECTION_LABEL.lead}>
        <HomeLeadBlock />
      </Section>

      <Section class='w-full' id='home-section-explanation' label={SECTION_LABEL.explanation}>
        <div class={`${container} max-w-5xl`}>
          <div class={vPad}>
            <HomeExplanationBlock />
          </div>
        </div>
      </Section>

      <ImageBreak {...homeImageBreaks[0]} />

      <Section class='w-full' id='home-section-strengths' label={SECTION_LABEL.strengths}>
        <div class={`${container} max-w-5xl`}>
          <div class={vPad}>
            <HomeStrengthsBlock />
          </div>
        </div>
      </Section>

      <ImageBreak {...homeImageBreaks[1]} />

      <Section class='w-full' id='home-section-facts' label={SECTION_LABEL.facts}>
        <div class={`${container} max-w-5xl`}>
          <div class={vPad}>
            <HomeFactsBlock />
          </div>
        </div>
      </Section>

      <ImageBreak {...homeImageBreaks[2]} />

      <Section class='w-full' id='home-section-conversion' label={SECTION_LABEL.conversion}>
        <div class={`${container} max-w-xl`}>
          <div class={vPad}>
            <HomeConversionBlock />
          </div>
        </div>
      </Section>
    </div>
  );
}
