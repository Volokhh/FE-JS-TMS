import type { PostVariantProps } from '../../types.ts';
import { formatDate } from '../../constants.ts';
import { PostActions } from '../../postActions.tsx';

export const LargePost = ({ post, onOpen }: PostVariantProps) => (
   <article className="post post--large">
      <div className="post__content">
         <span className="post__date">{formatDate(post.date)}</span>
         <h2 className="post__title" onClick={() => onOpen(post.id)}>{post.title}</h2>
         <p className="post__text">{post.text}</p>
      </div>
      {post.image && <img className="post__image" src={post.image} alt={post.title} onClick={() => onOpen(post.id)} />}
      <div className="post__footer"><PostActions /></div>
   </article>
);
