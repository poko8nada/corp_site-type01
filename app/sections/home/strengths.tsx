import { TextCardGrid } from '@/components/text-card-grid';

import { homeStrengthsCatalog } from './index';

export function HomeStrengthsBlock() {
  return <TextCardGrid {...homeStrengthsCatalog} />;
}
