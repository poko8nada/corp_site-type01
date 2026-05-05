import { MapWithInfo } from '@/components/map-with-info';

import { homeFactsHeading, homeFactsMapNote, homeFactsRows } from './index';

export function HomeFactsBlock() {
  return <MapWithInfo heading={homeFactsHeading} mapNote={homeFactsMapNote} rows={homeFactsRows} />;
}
