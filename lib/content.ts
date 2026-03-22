import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Concert {
  type: 'upcoming' | 'past';
  date: string;
  venue: string;
  location: string;
  program: string;
  time?: string;
  ticketLink?: string;
}

export interface Media {
  type: 'recording' | 'video';
  title: string;
  year: string;
  label?: string;
  venue?: string;
  description?: string;
  link?: string;
}

export interface Bio {
  title: string;
  language: string;
  content: string;
}

export function getConcerts(): Concert[] {
  const concertsDirectory = path.join(contentDirectory, 'concerts');
  const fileNames = fs.readdirSync(concertsDirectory);
  
  const concerts = fileNames.map((fileName) => {
    const fullPath = path.join(concertsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      type: data.type,
      date: data.date,
      venue: data.venue,
      location: data.location,
      program: data.program,
      time: data.time,
      ticketLink: data.ticketLink,
    } as Concert;
  });

  concerts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return concerts;
}

export function getUpcomingConcerts(): Concert[] {
  const concerts = getConcerts();
  return concerts.filter(concert => concert.type === 'upcoming');
}

export function getPastConcerts(): Concert[] {
  const concerts = getConcerts();
  return concerts.filter(concert => concert.type === 'past');
}

export function getMedia(): { recordings: Media[]; videos: Media[] } {
  const mediaDirectory = path.join(contentDirectory, 'media');
  const fileNames = fs.readdirSync(mediaDirectory);
  
  const allMedia = fileNames.map((fileName) => {
    const fullPath = path.join(mediaDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      type: data.type,
      title: data.title,
      year: data.year,
      label: data.label,
      venue: data.venue,
      description: data.description,
      link: data.link,
    } as Media;
  });

  const recordings = allMedia.filter(item => item.type === 'recording');
  const videos = allMedia.filter(item => item.type === 'video');
  
  return { recordings, videos };
}

export function getBio(language: 'en' | 'fr' | 'it'): Bio {
  const bioPath = path.join(contentDirectory, 'bio', `${language}.md`);
  const fileContents = fs.readFileSync(bioPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    title: data.title,
    language: data.language,
    content,
  };
}
