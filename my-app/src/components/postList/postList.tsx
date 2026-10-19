import { POSTS } from '../../constants.ts';
import { PostCard } from '../postCard/postCard.tsx';
import './PostList.css';

export const PostList = () => {
   const [largePost, ...rest] = POSTS;
   const mediumPosts = rest.slice(0, 4);
   const smallPosts = rest.slice(4);

   return (
      <div className="post-list">
         <div className="post-list__main">
            <div className="post-list__large">
               <PostCard post={largePost} variant="large" />
            </div>
            {mediumPosts.map((post) => (
               <PostCard key={post.id} post={post} variant="medium" />
            ))}
         </div>

         <div className="post-list__side">
            {smallPosts.map((post) => (
               <PostCard key={post.id} post={post} variant="small" />
            ))}
         </div>
      </div>
   );
};
