import { getUpcomingConcerts } from '@/lib/content';
import HomeClient from './HomeClient';

export default function Home() {
  const upcomingConcerts = getUpcomingConcerts();
  return <HomeClient upcomingConcerts={upcomingConcerts} />;
}
