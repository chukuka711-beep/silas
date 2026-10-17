import { BrainCircuit, Cloud, Code2, Cpu, Network, ShieldCheck } from 'lucide-react';

const shareText = encodeURIComponent(
  "One community. Every tech mind. Vote Oshoma'h Silas for Director of Software! Together, let's move from learning to building.",
);

export const shareUrl = `https://wa.me/?text=${shareText}`;

export const disciplines = [
  {
    name: 'Cybersecurity',
    sub: 'Secure · Monitor · Protect',
    icon: ShieldCheck,
    detail: 'Explore how we protect systems, networks, and information through practical security awareness.',
  },
  {
    name: 'Software Development',
    sub: 'Build · Innovate · Create',
    icon: Code2,
    detail: 'Turn ideas into useful websites, applications, and collaborative student projects.',
  },
  {
    name: 'AI & Data Science',
    sub: 'Analyse · Predict · Solve',
    icon: BrainCircuit,
    detail: 'Discover how data and intelligent tools can help solve real problems.',
  },
  {
    name: 'Networking',
    sub: 'Connect · Configure · Learn',
    icon: Network,
    detail: 'Understand the infrastructure that connects people, devices, and services.',
  },
  {
    name: 'Cloud & DevOps',
    sub: 'Deploy · Scale · Improve',
    icon: Cloud,
    detail: 'Learn about deployment, cloud platforms, and reliable ways to ship projects.',
  },
  {
    name: 'Hardware & IoT',
    sub: 'Connect · Build · Explore',
    icon: Cpu,
    detail: 'Explore devices, hardware, and the systems that connect the digital and physical worlds.',
  },
];
