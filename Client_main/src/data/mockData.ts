export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  year: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  github?: string;
  year: number;
}

export const events: Event[] = [
  // 2025 Events
  {
    id: '1',
    title: 'DevFest 2025',
    date: 'March 15, 2025',
    description: 'Join us for the biggest developer festival of the year featuring talks on AI, Cloud, and Mobile.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    year: 2025,
  },
  {
    id: '2',
    title: 'Flutter Forward',
    date: 'February 20, 2025',
    description: 'Explore the future of cross-platform development with Flutter and Dart.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&h=400&fit=crop',
    year: 2025,
  },
  {
    id: '3',
    title: 'AI/ML Workshop',
    date: 'January 10, 2025',
    description: 'Hands-on workshop on building ML models with TensorFlow and Vertex AI.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    year: 2025,
  },
  // 2024 Events
  {
    id: '4',
    title: 'DevFest 2024',
    date: 'November 23, 2024',
    description: 'A day full of tech talks, workshops, and networking with fellow developers.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
    year: 2024,
  },
  {
    id: '5',
    title: 'Google I/O Extended',
    date: 'May 14, 2024',
    description: 'Watch Google I/O together and discuss the latest announcements.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop',
    year: 2024,
  },
  {
    id: '6',
    title: 'Cloud Study Jam',
    date: 'August 5, 2024',
    description: 'Learn Google Cloud Platform with hands-on labs and expert guidance.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    year: 2024,
  },
  // 2023 Events
  {
    id: '7',
    title: 'DevFest 2023',
    date: 'December 2, 2023',
    description: 'The biggest developer conference with speakers from around the globe.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop',
    year: 2023,
  },
  {
    id: '8',
    title: 'Android Study Jam',
    date: 'September 15, 2023',
    description: 'Build your first Android app with Kotlin and Jetpack Compose.',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=400&fit=crop',
    year: 2023,
  },
  // 2022 Events
  {
    id: '9',
    title: 'DevFest 2022',
    date: 'October 15, 2022',
    description: 'Our first in-person event post-pandemic with amazing tech sessions.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop',
    year: 2022,
  },
  {
    id: '10',
    title: 'Web Study Jam',
    date: 'July 20, 2022',
    description: 'Deep dive into modern web technologies and frameworks.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    year: 2022,
  },
];

export const teamMembers: TeamMember[] = [
  // 2025 Team
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Organizer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    year: 2025,
  },
  {
    id: '2',
    name: 'Alex Kumar',
    role: 'Tech Lead',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    year: 2025,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Events Manager',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    year: 2025,
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Community Manager',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    github: 'https://github.com',
    year: 2025,
  },
  // 2024 Team
  {
    id: '5',
    name: 'Michael Park',
    role: 'Lead Organizer',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    year: 2024,
  },
  {
    id: '6',
    name: 'Lisa Chang',
    role: 'Tech Lead',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    year: 2024,
  },
  {
    id: '7',
    name: 'David Kim',
    role: 'Events Manager',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    github: 'https://github.com',
    year: 2024,
  },
  // 2023 Team
  {
    id: '8',
    name: 'Rachel Green',
    role: 'Lead Organizer',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    year: 2023,
  },
  {
    id: '9',
    name: 'Tom Anderson',
    role: 'Tech Lead',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
    github: 'https://github.com',
    year: 2023,
  },
  // 2022 Team
  {
    id: '10',
    name: 'Jennifer Lee',
    role: 'Lead Organizer',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
    linkedin: 'https://linkedin.com',
    year: 2022,
  },
  {
    id: '11',
    name: 'Chris Martin',
    role: 'Tech Lead',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop',
    github: 'https://github.com',
    year: 2022,
  },
];
