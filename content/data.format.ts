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

export interface PresentationData {
  colors: {
    pageBackground: string;
    surfaceBackground: string;
    surfaceMuted: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
    overlay: string;
  };
  typography: {
    headingFamily: string;
    bodyFamily: string;
    accentFamily?: string;
    headingWeight: number;
    bodyWeight: number;
    lineHeight: string;
    letterSpacing: string;
  };
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
    colors: {
      pageBackground: '#000000',
      surfaceBackground: '#111111',
      surfaceMuted: '#222222',
      textPrimary: '#ffffff',
      textSecondary: '#cccccc',
      accent: '#888888',
      border: 'rgba(255, 255, 255, 0.16)',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    typography: {
      headingFamily: '',
      bodyFamily: '',
      accentFamily: '',
      headingWeight: 600,
      bodyWeight: 400,
      lineHeight: '1.7',
      letterSpacing: '0.02em',
    },
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
