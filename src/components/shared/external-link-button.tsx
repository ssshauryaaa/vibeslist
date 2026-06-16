import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ExternalLinkButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export default function ExternalLinkButton({
  label,
  href = '#',
  className = '',
}: ExternalLinkButtonProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  const content = (
    <>
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  const baseStyles = "inline-flex items-center gap-1.5 rounded-full bg-white text-black font-medium text-sm px-5 py-2.5 transition-all hover:bg-white/90 active:scale-[0.98] group cursor-pointer";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {content}
    </Link>
  );
}
