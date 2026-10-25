import type { ChangeEventHandler, ReactNode, RefObject } from 'react';

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

export interface TabsProps {
   tabs: string[];
   activeTab: string;
   onChange: (tab: string) => void;
}

export type InputType = 'text' | 'password' | 'email';

export type Props = {
   label: string;
   type?: InputType;
   error?: string;
   id: string;
   placeholder: string;
   disabled?: boolean;
   value: string;
   onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
   ref?: RefObject<HTMLInputElement | null>;
};

export interface FormLayoutProps{
   content: ReactNode,
   additionalUI?: ReactNode,
   footerUI?: ReactNode,
   buttonText: string,
   onClick: () => void;
}