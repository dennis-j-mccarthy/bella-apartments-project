import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bonita Springs Apartments Blog | Downtown Bonita Springs Living',
  description: 'Discover downtown Bonita Springs living, local guides, and lifestyle tips for relocating to Bonita Springs apartments. Your guide to the Bonita Springs community.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
