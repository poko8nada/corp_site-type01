export interface PostalAddress {
  region: string;
  locality: string;
  streetAddress: string;
  building?: string;
}

export interface ContactChannel {
  type: 'phone' | 'instagram' | 'email' | 'form';
  label: string;
  value: string;
  href?: string;
}

// インタビューで取得した生データ。
// サイトに使うかどうかはこの段階では固定しない。
export interface InterviewData {
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
  notes: {
    internalNotes: string[];
  };
}

/**
 * レイアウト・余白・非色の効き方（トーン／質感の語彙のみ）。
 * テーマ名・パレット・フォントファミリーは CSS 側の責務とし、ここには持たない。
 */
export interface PresentationData {
  spacing: {
    section: string;
    content: string;
    containerWidth: string;
  };
  effects: {
    radius: string;
    shadow: string;
    overlayImage: string;
  };
  imagery: {
    tone: string;
    saturation: string;
  };
}

export interface SiteData {
  interview: InterviewData;
  presentation: PresentationData;
}

// 現在の default data。値としては中洲のバーを入れているが、型自体は汎用。
export const siteData: SiteData = {
  interview: {
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
        { type: 'phone', label: 'Tel', value: '092-555-0137', href: 'tel:0925550137' },
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
    notes: {
      internalNotes: [
        '写真は暗すぎず、木材の質感が見えるものを優先したい',
        '中洲らしさは出すが、派手さより落ち着きを優先する',
      ],
    },
  },
  presentation: {
    spacing: {
      section: 'clamp(4rem, 8vw, 7rem)',
      content: '1.5rem',
      containerWidth: '72rem',
    },
    effects: {
      radius: '1rem',
      shadow: '',
      overlayImage: '',
    },
    imagery: {
      tone: 'warm',
      saturation: 'slightly-muted',
    },
  },
} as const;
