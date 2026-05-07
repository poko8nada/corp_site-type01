import { FaqList } from '@/components/faq-list';

import { homeInfoFaq } from './index';

export function HomeInfoBlock() {
  return <FaqList {...homeInfoFaq} />;
}
