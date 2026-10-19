
import { useState } from 'react';
import './PostCard.css';

type Vote = 'like' | 'dislike' | null;

interface PostActionsProps {
   initialLikes?: number;
   initialDislikes?: number;
}

export const PostActions = ({ initialLikes = 0, initialDislikes = 0 }: PostActionsProps) => {
   const [likes, setLikes] = useState<number>(initialLikes);
   const [dislikes, setDislikes] = useState<number>(initialDislikes);
   const [vote, setVote] = useState<Vote>(null);
   const [saved, setSaved] = useState<boolean>(false);

   const handleLike = () => {
      if (vote === 'like') {
         setLikes((prev) => prev - 1);
         setVote(null);
         return;
      }
      if (vote === 'dislike') {
         setDislikes((prev) => prev - 1);
      }
      setLikes((prev) => prev + 1);
      setVote('like');
   };

   const handleDislike = () => {
      if (vote === 'dislike') {
         setDislikes((prev) => prev - 1);
         setVote(null);
         return;
      }
      if (vote === 'like') {
         setLikes((prev) => prev - 1);
      }
      setDislikes((prev) => prev + 1);
      setVote('dislike');
   };

   return (
      <div className="post-actions">
         <div className="post-actions__left">
            <button
               type="button"
               className={vote === 'like' ? 'is-active' : ''}
               onClick={handleLike}
            >
               👍 {likes}
            </button>
            <button
               type="button"
               className={vote === 'dislike' ? 'is-active' : ''}
               onClick={handleDislike}
            >
               👎 {dislikes}
            </button>
         </div>
         <div className="post-actions__right">
            <button
               type="button"
               className={saved ? 'is-active' : ''}
               onClick={() => setSaved((prev) => !prev)}
            >
               🔖
            </button>
            <button type="button">⋯</button>
         </div>
      </div>
   );
};
