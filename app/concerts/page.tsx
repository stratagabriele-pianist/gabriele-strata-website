import { getConcerts } from '@/lib/content';
import ConcertsClient from './ConcertsClient';

export default function Concerts() {
  const concerts = getConcerts();

  return <ConcertsClient concerts={concerts} />;
}
