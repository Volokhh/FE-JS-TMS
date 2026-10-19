import type { PostVariantProps } from '../../types.ts';
import { formatDate } from '../../constants.ts';
import {PostActions} from '../../postActions.tsx';

export const MediumPost = ({ post }: PostVariantProps) => (
   <article className="post post--medium">
      {post.image && <img className="post__image" src={post.image} alt={post.title} />}
      <span className="post__date">{formatDate(post.date)}</span>
      <h3 className="post__title">{post.title}</h3>
      <PostActions />
   </article>
);
