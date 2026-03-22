'use client';

interface CurvedDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

export default function CurvedDivider({
  topColor = '#0f1419',
  bottomColor = '#161d23',
  flip = false,
}: CurvedDividerProps) {
  return (
    <div className={`relative w-full ${flip ? 'rotate-180' : ''}`} style={{ height: '80px' }}>
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1440,0 L1440,100 L0,100 Z"
          fill={topColor}
        />
        <path
          d="M0,50 Q360,90 720,50 T1440,50 L1440,100 L0,100 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
