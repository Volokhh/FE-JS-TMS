import type { Post } from './types.ts';

const basePost: Post = {
   id: 0,
   image: 'https://i.pinimg.com/736x/19/b1/ac/19b1ac2f0b5f4149d143c4e94a4d4531.jpg',
   text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system.',
   date: '2021-04-20',
   lesson_num: 1,
   title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
   author: 1,
};

export const POSTS: Post[] = Array.from({ length: 10 }, (_, i) => ({
   ...basePost,
   id: i + 1,
}));

export const formatDate = (date: string) =>
   new Date(date).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
   });