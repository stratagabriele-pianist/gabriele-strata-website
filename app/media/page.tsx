import { getVideos } from '@/lib/content';
import MediaClient from './MediaClient';

export default function Media() {
  const videos = getVideos();

  return <MediaClient videos={videos} />;
}
