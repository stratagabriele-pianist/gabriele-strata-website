import { getBio } from '@/lib/content';
import AboutClient from './AboutClient';

export default function About() {
  const bioEn = getBio('en');

  return <AboutClient bioEn={bioEn} />;
}
