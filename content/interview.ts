interface PostalAddress {
  region: string;
  locality: string;
  streetAddress: string;
  building?: string;
}

interface ContactChannel {
  type: 'phone' | 'instagram' | 'email' | 'form';
  label: string;
  value: string;
  href?: string;
}

interface InterviewData {
  identity: {
    publicName: string;
    legalName?: string;
    summary: string;
    keywords: string[];
  };
  business: {
    category: string;
    concept: string;
    strengths: string[];
    offerings: string[];
    targetAudiences: string[];
    useCases: string[];
  };
  operations: {
    address: PostalAddress;
    nearestStation?: string;
    businessHours: string;
    holidayNotes?: string;
    reservationNotes?: string;
  };
  contact: {
    primaryChannel: ContactChannel['type'];
    channels: ContactChannel[];
  };
  trust: {
    achievements: string[];
    policies: string[];
  };
  design: {
    /** 雰囲気の希望（クライアントの生の言葉） */
    mood: string[];
    /** イメージする色の系統（クライアントの生の言葉） */
    colorPreference: string[];
    /** 雰囲気を表す短い一文（クライアントの生の言葉） */
    atmosphere: string;
    /** 写真・素材に関する希望（クライアントの生の言葉） */
    imageryNotes: string[];
    /** フォントの印象（クライアントの生の言葉） */
    fontImpression?: string[];
  };
}

const _interviewData: InterviewData = {
  identity: {
    publicName: 'BAR KAGETSUKI NAKASU',
    legalName: 'BAR KAGETSUKI',
    summary:
      '福岡・中洲の夜に、静かに寄り添うオーセンティックバー。ウイスキーとカクテルを落ち着いた空間で楽しめます。',
    keywords: ['オーセンティック', '中洲', 'ウイスキー', 'クラシックカクテル'],
  },
  business: {
    category: 'オーセンティックバー',
    concept: '会話の邪魔をしない、上質な一杯と静かな余韻を提供する。',
    strengths: [
      '落ち着いた照明と木の質感を活かした内装',
      'クラシックカクテルと厳選ウイスキー',
      '接待にも一人飲みにも使いやすい距離感の接客',
    ],
    offerings: ['クラシックカクテル', 'ウイスキー', '季節のおすすめ'],
    targetAudiences: ['接待利用', '二軒目利用', '一人で静かに飲みたい人'],
    useCases: ['仕事帰り', '記念日の一杯', '会食後の二軒目'],
  },
  operations: {
    address: {
      region: '福岡県',
      locality: '福岡市博多区中洲',
      streetAddress: '3-7-24',
      building: 'Gate Stage Nakasu 5F',
    },
    nearestStation: '中洲川端駅から徒歩約4分',
    businessHours: '19:00 - 02:00',
    holidayNotes: '日曜定休',
    reservationNotes: '貸切や記念日の相談可。混雑日は電話予約推奨。',
  },
  contact: {
    primaryChannel: 'phone',
    channels: [
      { type: 'phone', label: 'Tel', value: '092-555-0137' },
      {
        type: 'instagram',
        label: 'Instagram',
        value: '@bar_kagetsuki',
        href: 'https://instagram.com/bar_kagetsuki',
      },
    ],
  },
  trust: {
    achievements: ['地元常連客のリピート利用', '会食後利用の紹介が多い'],
    policies: ['過度に騒がしい利用は控えてもらう', '香りの強い香水は配慮を案内する'],
  },
  design: {
    mood: ['派手さは控えめにしたい', '落ち着いた印象にしたい', '高級感よりも「静かに来れる」感じ'],
    colorPreference: [
      '暗めの背景がいい',
      '木材の色に合う茶系がいい',
      'アンバーや焦げ茶の照明の色をイメージしている',
    ],
    atmosphere: '暗すぎず、木材の質感が感じられる静かな空間。',
    imageryNotes: [
      '写真は暗すぎず、木材の質感が見えるものを優先',
      '中洲らしさは出すが、派手さより落ち着きを優先',
    ],
    fontImpression: ['あまりポップなフォントは避けたい', '読みやすく、品のある感じ'],
  },
} as const;
