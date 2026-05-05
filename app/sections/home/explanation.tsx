import { MediaBlock } from '@/components/media-block';
import { RichText } from '@/components/rich-text';

import { homeExplanationCatalog, homeExplanationImage } from './index';

export function HomeExplanationBlock() {
  return (
    <MediaBlock {...homeExplanationImage}>
      <RichText {...homeExplanationCatalog} />
    </MediaBlock>
  );
}
