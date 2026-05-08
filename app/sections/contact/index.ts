export { ContactContextBlock } from './context';
export { ContactFormArea } from './form-area';

export const PHONE = 'XXX-XXX-XXXX';

export const contactContextCatalog = {
  phoneHeading: 'お電話でのお問い合わせ',
  phoneDesc: '当日のご予約・お急ぎの方はお電話でお受けしております。',
  phone: PHONE,
  hours: '月〜木 18:30〜翌2:00／金・土 18:30〜翌3:00（日曜定休）',
  formHeading: 'フォームでのお問い合わせ',
  formDesc: 'ご予約のご相談、貸切のご希望、取材のお問い合わせは下記フォームからお送りください。',
  formNote:
    '内容を確認のうえ、3営業日以内にご連絡いたします。日曜・祝日は定休のため、返信にお時間をいただく場合がございます。',
} as const;
