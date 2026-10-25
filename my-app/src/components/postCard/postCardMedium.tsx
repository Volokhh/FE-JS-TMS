import type { PostVariantProps } from '../../types.ts';
import { formatDate } from '../../constants.ts';
import { PostActions } from '../../PostActions.tsx';

export const MediumPost = ({ post, onOpen }: PostVariantProps) => (
   <article className="post post--medium">
      {post.image && <img className="post__image" src={post.image} alt={post.title} onClick={() => onOpen(post.id)} />}
      <span className="post__date">{formatDate(post.date)}</span>
      <h3 className="post__title" onClick={() => onOpen(post.id)}>{post.title}</h3>
      <PostActions />
   </article>
);
