// Central fake data store — imported by all screens, no backend or auth required

export const ME = {
  id: '1',
  name: 'Lissa Chaves',
  email: 'lissa@example.com',
  bio: 'figuring it out one city at a time ✨',
  city: 'New York, NY',
  avatar: 'https://i.pravatar.cc/150?img=47',
};

export const FRIENDS = [
  { id: '2', name: 'Maya Johnson', avatar: 'https://i.pravatar.cc/150?img=32', city: 'Austin, TX' },
  { id: '3', name: 'Carlos Rivera', avatar: 'https://i.pravatar.cc/150?img=11', city: 'Chicago, IL' },
  { id: '4', name: 'Sophie Chen', avatar: 'https://i.pravatar.cc/150?img=5', city: 'San Francisco, CA' },
  { id: '5', name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?img=15', city: 'Boston, MA' },
];

export type Post = {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userCity: string;
  type: 'text' | 'photo';
  content: string;
  image?: string;
  createdAt: string;
  isPinned: boolean;
};

export const POSTS: Post[] = [
  {
    id: 'p1',
    userId: '2',
    userName: 'Maya Johnson',
    userAvatar: 'https://i.pravatar.cc/150?img=32',
    userCity: 'Austin, TX',
    type: 'text',
    content: 'just landed my first apartment in austin 🎉 it has a balcony and i am never leaving',
    createdAt: '2 hours ago',
    isPinned: false,
  },
  {
    id: 'p2',
    userId: '3',
    userName: 'Carlos Rivera',
    userAvatar: 'https://i.pravatar.cc/150?img=11',
    userCity: 'Chicago, IL',
    type: 'photo',
    content: "deep dish > everything, sorry i don't make the rules",
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    createdAt: '5 hours ago',
    isPinned: false,
  },
  {
    id: 'p3',
    userId: '4',
    userName: 'Sophie Chen',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    userCity: 'San Francisco, CA',
    type: 'text',
    content: 'reminder that it is okay to not have everything figured out at 23. that is literally the whole point of being 23',
    createdAt: '1 day ago',
    isPinned: false,
  },
  {
    id: 'p4',
    userId: '5',
    userName: 'Jordan Lee',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    userCity: 'Boston, MA',
    type: 'photo',
    content: 'first solo hike done ✅ my legs hate me but my soul is thriving',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
    createdAt: '2 days ago',
    isPinned: false,
  },
];

export type Pin = {
  id: string;
  userId: string;
  type: 'text' | 'photo';
  content: string;
  image?: string;
  createdAt: string;
  isPinned: boolean;
};

export const MY_PINS: Pin[] = [
  {
    id: 'pin1',
    userId: '1',
    type: 'text',
    content: 'new chapter, new city. grateful for everyone who got me here 🏠',
    createdAt: '1 week ago',
    isPinned: true,
  },
  {
    id: 'pin2',
    userId: '1',
    type: 'photo',
    content: 'graduation day forever in my heart',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    createdAt: '3 weeks ago',
    isPinned: true,
  },
];
