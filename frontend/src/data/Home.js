export const countries = [
    { name: "France", to : '/france', img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000" },
    { name: "Japan", to:'/japan', img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000" },
    { name: "Malaysia", to:'/malaysia', img: "https://images.unsplash.com/photo-1517616434449-06691469a572?q=80&w=1000" },
    { name: "USA", to:'/usa', img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000" },
    { name: "UK", to:'/uk', img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000" },
    { name: "S. Korea", to:'/south_korea', img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000" },
];

import {
  Briefcase,
  Globe,
  GraduationCap,
  FileText
} from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Career Counseling",
    description:
      "We help you identify your goals and select the right course, university, and country based on your academic background, interests, and future career plans.",
    icon: Briefcase
  },
  {
    id: 2,
    title: "Country Selection Guidance",
    description:
      "Get expert advice on choosing the ideal destination—whether it’s Australia, UK, USA, Canada, or Europe—based on visa policy, opportunities, and lifestyle.",
    icon: Globe
  },
  {
    id: 3,
    title: "University & Course Selection",
    description:
      "We assist in selecting the best-fit universities and programs aligned with your academic profile and career aspirations.",
    icon: GraduationCap
  },
  {
    id: 4,
    title: "Visa Processing Assistance",
    description:
      "From filling out visa forms to interview preparation, we guide you through every step of the visa application process to increase your chances of approval.",
    icon: FileText
  },
  {
    id: 5,
    title: "Documentation Help",
    description:
      "Our team ensures all your documents—academic, financial, and personal—are correctly prepared and submitted on time for successful applications.",
    icon: FileText
  }
];
