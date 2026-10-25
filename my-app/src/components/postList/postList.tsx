import { POSTS } from '../../constants.ts';
import { PostCard } from '../PostCard/PostCard.tsx';
import './PostList.css';

interface PostListProps {
   onOpenPost: (id: number) => void;
}


export const PostList = ({ onOpenPost }: PostListProps) => {
   const [largePost, ...rest] = POSTS;
   const mediumPosts = rest.slice(0, 4);
   const smallPosts = rest.slice(3);

   return (
      <div className="post-list">
         <div className="post-list__main">
            <div className="post-list__large">
               <PostCard post={largePost} variant="large" onOpen={onOpenPost} />
            </div>
            {mediumPosts.map((post) => (
               <PostCard key={post.id} post={post} variant="medium" onOpen={onOpenPost} />
            ))}
         </div>

         <div className="post-list__side">
            {smallPosts.map((post) => (
               <PostCard key={post.id} post={post} variant="small" onOpen={onOpenPost} />
            ))}
         </div>
      </div>
   );
};
