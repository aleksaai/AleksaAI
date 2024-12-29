import React from 'react';
import { Linkedin, Instagram, Globe } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';

const teamMembers = [
  {
    name: "Aleksa Spalevic",
    role: "CEO & AI Solutions Architect",
    image: "https://i.postimg.cc/Pxc2vSGF/U-Own-Destiny-Web-25.png",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/aleksaspalevic/" },
      { icon: Globe, url: "https://aleksa.ai/" },
      { icon: Instagram, url: "https://www.instagram.com/iamaleksa.ai" }
    ]
  },
  {
    name: "Maximilian Keiser",
    role: "Front-End Designer",
    image: "https://i.postimg.cc/4x30w8wc/P1090538.png",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/maximilian-keiser/" },
      { icon: Globe, url: "https://adictive.io/" },
      { icon: Instagram, url: "https://www.instagram.com/adictive.io/" }
    ]
  },
  {
    name: "Selim Disli",
    role: "Developer",
    image: "https://i.postimg.cc/fLYqk1WG/2024-12-29-10-45-37.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/selim-can-disli-2b0a07296/" }
    ]
  },
  {
    name: "Christina Cheng",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
    socialLinks: [
      { icon: Globe, url: "https://destinymedia.de/" }
    ]
  },
  {
    name: "Aurélien Wilmes",
    role: "Growth Partner",
    image: "https://i.postimg.cc/1t1JxM0J/AW.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/aurelienwilmes/" },
      { icon: Globe, url: "https://www.sentrovo.de/" }
    ]
  },
  {
    name: "Raphael Niklewitz",
    role: "Growth Partner",
    image: "https://i.postimg.cc/rmGgqWQc/RN-Full.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/raphael-niklewitz/" },
      { icon: Globe, url: "https://www.sentrovo.de/" }
    ]
  }
];

export function TeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  );
}