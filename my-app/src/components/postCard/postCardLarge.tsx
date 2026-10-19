import type { PostVariantProps } from '../../types.ts';
import { formatDate } from '../../constants.ts';
import { PostActions } from '../../postActions.tsx';

export const LargePost = ({ post }: PostVariantProps) => (
   <article className="post post--large">
      <div className="post__content">
         <span className="post__date">{formatDate(post.date)}</span>
         <h2 className="post__title">{post.title}</h2>
         <p className="post__text">{post.text}</p>
      </div>
      {post.image && <img className="post__image" src={post.image} alt={post.title} />}
      <div className="post__footer"><PostActions /></div>
   </article>
);
