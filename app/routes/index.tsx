import { CtaBand } from '@/components/cta-band';
import { MapWithInfo } from '@/components/map-with-info';
import { RichText } from '@/components/rich-text';
import { Section } from '@/components/section';
import { VisualLead } from '@/components/visual-lead';
import { createRoute } from 'honox/factory';

/**
 * ブロックの並びは `content/structure.ts` の `routes.home.blocks` に合わせる。
 * 文言・事実は `content/interview.ts` を目視して手で埋める（`content/` から import しない）。
 */
export default createRoute((c) => {
  return c.render(
    <div class='text-base-content flex flex-col'>
      <Section sectionRole='lead'>
        <VisualLead
          description='福岡・中洲の夜に、静かに寄り添うオーセンティックバー。ウイスキーとカクテルを落ち着いた空間で楽しめます。'
          eyebrow='オーセンティックバー'
          headline='BAR KAGETSUKI NAKASU'
          imageAlt='店内の様子（落ち着いた照明と木の質感が分かる写真を想定）'
        />
      </Section>

      <Section sectionRole='explanation'>
        <RichText
          heading='静かに味わう一杯'
          paragraphs={[
            '会話の邪魔をしない、上質な一杯と静かな余韻を提供する。',
            '落ち着いた照明と木の質感を活かした内装と、クラシックカクテルと厳選ウイスキー。接待にも一人飲みにも使いやすい距離感の接客を心がけています。',
            'クラシックカクテル、ウイスキー、季節のおすすめをご用意しています。',
          ]}
        />
      </Section>

      <Section sectionRole='facts'>
        <MapWithInfo
          heading='店舗・アクセス'
          mapNote='地図の埋め込みや外部マップへのリンクは、公開時に接続する。'
          rows={[
            {
              label: '住所',
              value: '福岡県福岡市博多区中洲 3-7-24 Gate Stage Nakasu 5F',
            },
            { label: 'アクセス', value: '中洲川端駅から徒歩約4分' },
            { label: '営業時間', value: '19:00 - 02:00' },
            { label: '定休日', value: '日曜定休' },
            {
              label: 'ご予約',
              value: '貸切や記念日の相談可。混雑日は電話予約推奨。',
            },
            { label: '電話', value: '092-555-0137', valueHref: 'tel:0925550137' },
            {
              label: 'Instagram',
              value: '@bar_kagetsuki',
              valueHref: 'https://instagram.com/bar_kagetsuki',
            },
          ]}
        />
      </Section>

      <Section sectionRole='conversion'>
        <CtaBand
          ctaHref='/contact'
          ctaLabel='お問い合わせ'
          description='ご予約や貸切のご相談など、お気軽にお問い合わせください。'
          heading='ご来店・お問い合わせ'
        />
      </Section>
    </div>,
    { title: 'BAR KAGETSUKI NAKASU' },
  );
});
