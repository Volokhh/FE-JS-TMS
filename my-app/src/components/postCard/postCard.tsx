import type { PostCardProps } from '../../types.ts';
import { LargePost } from './postCardLarge';
import { MediumPost } from './postCardMedium';
import { SmallPost } from './postCardSmall';
import '../../postCard.css';

export const PostCard = ({ post, variant }: PostCardProps) => {
   if (variant === 'large') return <LargePost post={post} />;
   if (variant === 'medium') return <MediumPost post={post} />;
   return <SmallPost post={post} />;
};
