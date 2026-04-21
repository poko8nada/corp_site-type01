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

/** `data.ts` の PresentationData と形を揃える（テーマ・色・フォントは持たない）。 */
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

// 何を聞けているかを確認するための整理。
export const interviewFieldOutline = {
  identity: ['publicName', 'legalName', 'summary', 'keywords'],
  business: ['category', 'concept', 'strengths', 'offerings', 'targetAudiences', 'useCases'],
  operations: ['address', 'nearestStation', 'businessHours', 'holidayNotes', 'reservationNotes'],
  contact: ['primaryChannel', 'channels'],
  trust: ['achievements', 'policies'],
  notes: ['internalNotes'],
} as const;

// 新しい案件を始める時にコピーして使うための汎用 data 雛形。
export const siteDataFormat: SiteData = {
  interview: {
    identity: {
      publicName: '',
      legalName: '',
      summary: '',
      keywords: [],
    },
    business: {
      category: '',
      concept: '',
      strengths: [],
      offerings: [],
      targetAudiences: [],
      useCases: [],
    },
    operations: {
      address: {
        region: '',
        locality: '',
        streetAddress: '',
        building: '',
      },
      nearestStation: '',
      businessHours: '',
      holidayNotes: '',
      reservationNotes: '',
    },
    contact: {
      primaryChannel: 'phone',
      channels: [],
    },
    trust: {
      achievements: [],
      policies: [],
    },
    notes: {
      internalNotes: [],
    },
  },
  presentation: {
    spacing: {
      section: '',
      content: '',
      containerWidth: '',
    },
    effects: {
      radius: '',
      shadow: '',
      overlayImage: '',
    },
    imagery: {
      tone: '',
      saturation: '',
    },
  },
} as const;
