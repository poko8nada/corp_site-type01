import { PHONE } from './index';

const GOOGLE_FORM_PLACEHOLDER =
  'https://docs.google.com/forms/d/e/1FAIpQLSfnFDlDX-u3YY48zw1WQ2ubwkiC34YKgkzoDLm54eRD3McHCw/viewform';

export function ContactFormArea() {
  return (
    <div class='mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8'>
      <div class='min-h-fit'>
        <iframe
          id='contact-form-iframe'
          src={GOOGLE_FORM_PLACEHOLDER + '?embedded=true'}
          height='1200'
          width='100%'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          title='お問い合わせフォーム'
        >
          読み込んでいます…
        </iframe>
      </div>
      <p class='mt-4 text-center text-xs text-base-content/50'>
        ※ フォームが表示されない場合は
        <a
          href={GOOGLE_FORM_PLACEHOLDER}
          target='_blank'
          rel='noopener noreferrer'
          class='underline hover:text-base-content/80'
        >
          こちら
        </a>
        から直接お進みください。 お急ぎの方は{' '}
        <a href={`tel:${PHONE.replace(/-/g, '')}`} class='underline hover:text-base-content/80'>
          {PHONE}
        </a>{' '}
        までお電話ください。
      </p>
    </div>
  );
}
