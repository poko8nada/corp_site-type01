import { InfoGrid } from '@/components/info-grid';

import { homeInfoCatalog } from './index';

export function HomeInfoBlock() {
  return <InfoGrid {...homeInfoCatalog} />;
}
