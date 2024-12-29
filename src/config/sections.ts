export const sections = {
  hero: {
    id: 'hero',
    label: 'Home',
    title: ''
  },
  services: {
    id: 'services',
    label: 'Services',
    title: 'Our Services'
  },
  process: {
    id: 'process',
    label: 'Process',
    title: 'Our Process'
  },
  reviews: {
    id: 'reviews',
    label: 'Reviews',
    title: 'Client Reviews'
  },
  team: {
    id: 'team',
    label: 'Team',
    title: 'Our Team'
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    title: 'Contact Us'
  },
  faq: {
    id: 'faq',
    label: 'FAQ',
    title: 'FAQ'
  },
  tools: {
    id: 'tools',
    label: 'Tools',
    title: 'Our Tools'
  }
} as const;

export type SectionId = keyof typeof sections;