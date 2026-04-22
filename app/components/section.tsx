import type { PropsWithChildren } from 'hono/jsx';

/** Home の構成は `content/structure.ts` の `routes.home.blocks` を目視参照。 */
export type HomeSectionRole = 'lead' | 'explanation' | 'facts' | 'conversion';

const SECTION_LABEL: Record<HomeSectionRole, string> = {
  lead: '導入',
  explanation: 'ご案内',
  facts: '店舗情報',
  conversion: 'お問い合わせ',
};

function sectionDomId(role: HomeSectionRole): string {
  return `home-section-${role}`;
}

export interface SectionProps extends PropsWithChildren {
  /** サイト構造上のブロック役割（DOM の `role` 属性とは別） */
  sectionRole: HomeSectionRole;
}

export function Section(props: SectionProps) {
  const { sectionRole, children } = props;
  const headingId = `${sectionDomId(sectionRole)}-heading`;
  const label = SECTION_LABEL[sectionRole];
  const showTopDivider = sectionRole !== 'lead';

  return (
    <section aria-labelledby={headingId} class='w-full' id={sectionDomId(sectionRole)}>
      <div class='mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8'>
        {showTopDivider ? <div class='divider my-0' /> : null}
        <div
          class={showTopDivider ? 'pb-12 pt-6 sm:pb-14 sm:pt-8' : 'pb-12 pt-12 sm:pb-14 sm:pt-14'}
        >
          <h2 class='sr-only' id={headingId}>
            {label}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
