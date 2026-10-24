import { useState } from 'react';
import { PostList } from '../components/postList/postList';
import './pages.css';

const TABS = ['All', 'My favorites', 'Popular'];

const AllPosts = ({ onOpenPost }: { onOpenPost: (id: number) => void }) => {
   const [activeTab, setActiveTab] = useState<string>('All');

   return (
      <div className="page">
         <h1 className="page__title">Blog</h1>

         <div className="tabs">
            {TABS.map((tab) => (
               <button
                  key={tab}
                  type="button"
                  className={tab === activeTab ? 'tab is-active' : 'tab'}
                  onClick={() => setActiveTab(tab)}
               >
                  {tab}
               </button>
            ))}
         </div>

         <PostList onOpenPost={onOpenPost} />

         <div className="pagination">
            <button className='pagination__prev' type="button">← Prev</button>
            <div className="pagination__pages">
               <span className="is-active">1</span>
               <span>2</span>
               <span>3</span>
               <span>…</span>
               <span>8</span>
            </div>
            <button className='pagination__next' type="button">Next →</button>
         </div>
      </div>
   );
};

export default AllPosts;