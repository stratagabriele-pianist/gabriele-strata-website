interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  bgColor = 'bg-surface',
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
