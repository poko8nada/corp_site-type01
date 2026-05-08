import { CtaBand } from '@/components/cta-band';
import { FaqList } from '@/components/faq-list';
import { ImageBreak } from '@/components/image-break';
import { MapWithInfo } from '@/components/map-with-info';
import { MediaBlock } from '@/components/media-block';
import { RichText } from '@/components/rich-text';
import { Section } from '@/components/section';
import { TextCardGrid } from '@/components/text-card-grid';
import { VisualLead } from '@/components/visual-lead';

import {
  homeConversionCatalog,
  homeExplanationCatalog,
  homeExplanationImage,
  homeFactsHeading,
  homeFactsMapNote,
  homeFactsRows,
  homeImageBreaks,
  homeInfoFaq,
  homeLeadCatalog,
  homeSectionSurfaces,
  homeStrengthsCatalog,
} from './index';

const container = 'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8';

export function HomePage() {
  return (
    <div class='text-base-content flex flex-col'>
      <Section class='w-full' id='home-section-lead' label='リード'>
        <VisualLead {...homeLeadCatalog} />
      </Section>

      <Section
        class='w-full home-divider section-pad-relaxed'
        id='home-section-explanation'
        label='ご案内'
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:40ms]'>
            <MediaBlock {...homeExplanationImage}>
              <RichText {...homeExplanationCatalog} />
            </MediaBlock>
          </div>
        </div>
      </Section>

      <Section
        class={`w-full ${homeSectionSurfaces.strengths} home-divider section-pad-relaxed`}
        id='home-section-strengths'
        label='強み・信頼'
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <TextCardGrid {...homeStrengthsCatalog} />
          </div>
        </div>
      </Section>

      <div class='home-divider'>
        <ImageBreak {...homeImageBreaks[0]} />
      </div>

      <Section
        class='w-full home-divider section-pad-relaxed'
        id='home-section-facts'
        label='店舗・アクセス'
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:60ms]'>
            <MapWithInfo heading={homeFactsHeading} mapNote={homeFactsMapNote} rows={homeFactsRows} />
          </div>
        </div>
      </Section>

      <Section
        class={`w-full ${homeSectionSurfaces.info} home-divider section-pad-compact`}
        id='home-section-info'
        label='営業・ご利用案内'
      >
        <div class={container}>
          <div class='reveal-on-scroll [--reveal-delay:80ms]'>
            <FaqList {...homeInfoFaq} />
          </div>
        </div>
      </Section>

      <div class='home-divider'>
        <ImageBreak {...homeImageBreaks[1]} />
      </div>

      <Section
        class='relative w-full home-divider section-pad-relaxed overflow-hidden'
        id='home-section-conversion'
        label='お問い合わせ'
      >
        <div class='absolute inset-0 cta-surface' />
        <div class={`${container} relative max-w-lg`}>
          <CtaBand {...homeConversionCatalog} />
        </div>
      </Section>
    </div>
  );
}
