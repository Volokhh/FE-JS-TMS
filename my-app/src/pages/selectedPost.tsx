import { POSTS } from '../constants';
import { PostActions } from '../postActions';
import './pages.css';

interface SelectedPostProps {
   postId: number;
   onOpenPost: (id: number) => void;
   onBack: () => void;
}

const SelectedPost = ({ postId, onOpenPost, onBack }: SelectedPostProps) => {
   const post = POSTS.find((p) => p.id === postId);
   if (!post) return null;

   const prevPost = POSTS.find((p) => p.id === postId - 1);
   const nextPost = POSTS.find((p) => p.id === postId + 1);

   return (
      <div className="page page__article">
         <div className="post__path" onClick={onBack}>Home / Post {post.id}</div>

         <h1 className="page__title">{post.title}</h1>

         <img className="article__image" src={post.image} alt={post.title} />

         <p className="article__text">{post.text}</p>

         <div className="article__footer">
            <PostActions key={post.id} />
            <button type="button" className="btn btn--light">Add to favorites</button>
         </div>

         <div className="article__nav">
            {prevPost ? (
               <span onClick={() => onOpenPost(prevPost.id)}>← Prev</span>
            ) : <span />}
            {nextPost ? (
               <span onClick={() => onOpenPost(nextPost.id)}>Next →</span>
            ) : <span />}
         </div>
      </div>
   );
};

export default SelectedPost;