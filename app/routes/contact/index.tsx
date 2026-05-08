import { Section } from '@/components/section';
import { frameBrandText } from '@/sections/frame';
import { createRoute } from 'honox/factory';
import { ContactContextBlock, ContactFormArea } from '@/sections/contact';

export default createRoute((c) => {
  return c.render(
    <div class='text-base-content flex flex-col'>
      <Section class='w-full section-pad-relaxed' id='contact-section-context' label='お問い合わせにあたって'>
        <ContactContextBlock />
      </Section>

      <Section
        class='w-full bg-surface-warm section-pad-relaxed home-divider'
        id='contact-section-form'
        label='お問い合わせフォーム'
      >
        <ContactFormArea />
      </Section>
    </div>,
    { title: `お問い合わせ | ${frameBrandText}` },
  );
});
