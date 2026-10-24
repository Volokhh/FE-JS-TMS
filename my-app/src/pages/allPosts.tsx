import { useState } from 'react';
import { PostList } from '../components/postList/postList';
import { Tabs } from '../components/tabs/tabs';
import { Pagination } from '../components/pagination/pagination';
import './pages.css';

const TABS = ['All', 'My favorites', 'Popular'];


const AllPosts = ({ onOpenPost }: { onOpenPost: (id: number) => void }) => {
   const [activeTab, setActiveTab] = useState<string>('All');

   return (
      <div className="page">
         <h1 className="page__title">Blog</h1>

         <div className="tabs">
            <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
         </div>

         <PostList onOpenPost={onOpenPost} />

         <Pagination />
      </div>
   );
};

export default AllPosts;