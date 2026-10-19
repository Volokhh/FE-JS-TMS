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

export interface PostCardProps {
   post: Post;
   variant: PostVariant;
}

export interface PostVariantProps {
   post: Post;
}