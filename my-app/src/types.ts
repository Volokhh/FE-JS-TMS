export type PostVariant = 'large' | 'medium' | 'small';

export interface Post {
   id: number;
   image?: string;
   text: string;
   date: string;
   lesson_num: number;
   title: string;
   author: number;
}


export interface PostVariantProps {
   post: Post;
   onOpen: (id: number) => void;
}

export interface PostCardProps {
   post: Post;
   variant: PostVariant;
   onOpen: (id: number) => void;
}