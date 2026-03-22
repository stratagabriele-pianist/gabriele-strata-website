import { getBio } from '@/lib/content';
import AboutClient from './AboutClient';

export default function About() {
  const bioEn = getBio('en');
  const bioFr = getBio('fr');
  const bioIt = getBio('it');

  return <AboutClient bioEn={bioEn} bioFr={bioFr} bioIt={bioIt} />;
}
