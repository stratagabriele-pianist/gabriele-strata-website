import { getMedia } from '@/lib/content';
import MediaClient from './MediaClient';

export default function Media() {
  const { recordings, videos } = getMedia();

  return <MediaClient recordings={recordings} videos={videos} />;
}
