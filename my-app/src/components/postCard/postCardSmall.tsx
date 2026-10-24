import type { PostVariantProps } from '../../types.ts';
import { formatDate } from '../../constants.ts';
import { PostActions } from '../../postActions.tsx';

export const SmallPost = ({ post, onOpen }: PostVariantProps) => (
   <article className="post post--small">
      <div className="post__row">
         <div>
            <span className="post__date">{formatDate(post.date)}</span>
            <h4 className="post__title" onClick={() => onOpen(post.id)}>{post.title}</h4>
         </div>
         {post.image && <img className="post__image" src={post.image} alt={post.title} onClick={() => onOpen(post.id)} />}
      </div>
      <PostActions />
   </article>
);

