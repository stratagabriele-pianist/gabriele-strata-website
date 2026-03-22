import { getUpcomingConcerts, getPastConcerts } from '@/lib/content';
import ConcertsClient from './ConcertsClient';

export default function Concerts() {
  const upcomingConcerts = getUpcomingConcerts();
  const pastConcerts = getPastConcerts();

  return <ConcertsClient upcomingConcerts={upcomingConcerts} pastConcerts={pastConcerts} />;
}
