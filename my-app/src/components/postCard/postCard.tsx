import type { PostCardProps } from '../../types.ts';
import { LargePost } from './postCardLarge';
import { MediumPost } from './postCardMedium';
import { SmallPost } from './postCardSmall';
import '../../postCard.css';

export const PostCard = ({ post, variant, onOpen }: PostCardProps) => {
   if (variant === 'large') return <LargePost post={post} onOpen={onOpen} />;
   if (variant === 'medium') return <MediumPost post={post} onOpen={onOpen} />;
   return <SmallPost post={post} onOpen={onOpen} />;
};
