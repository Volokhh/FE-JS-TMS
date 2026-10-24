import type { Post } from './types.ts';

const images = [
   'https://i.pinimg.com/1200x/b3/18/05/b31805445d8bcf8159847365165e20db.jpg',
   'https://i.pinimg.com/736x/55/01/8d/55018ddb58a1b3cf9aa1b6d4bd7aac0b.jpg',
   'https://i.pinimg.com/1200x/ce/31/67/ce3167341837c4aa222cbdfb9460ce5c.jpg',
   'https://i.pinimg.com/736x/6c/1b/1a/6c1b1ac0ee589b36a9944f2e9863ebf4.jpg',
   'https://i.pinimg.com/736x/22/a2/4a/22a24af802ff64272d7bbc9ffbd415e6.jpg',
   'https://i.pinimg.com/736x/40/ac/4c/40ac4c9abf2a9029eaa906fe5b5743e5.jpg',
   'https://i.pinimg.com/1200x/7b/71/07/7b7107769c487acdd6b7378eebdb201f.jpg',
   'https://i.pinimg.com/736x/55/01/8d/55018ddb58a1b3cf9aa1b6d4bd7aac0b.jpg',
   'https://i.pinimg.com/1200x/ce/31/67/ce3167341837c4aa222cbdfb9460ce5c.jpg',
   'https://i.pinimg.com/736x/6c/1b/1a/6c1b1ac0ee589b36a9944f2e9863ebf4.jpg',
];

const basePost: Omit<Post, 'image'> = {
   id: 0,
   text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system.',
   date: '2021-04-20',
   lesson_num: 1,
   title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
   author: 1,
};

export const POSTS: Post[] = Array.from({ length: 10 }, (_, i) => ({
   ...basePost,
   id: i + 1,
   image: images[i % images.length],
}));

export const formatDate = (date: string) =>
   new Date(date).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
   });