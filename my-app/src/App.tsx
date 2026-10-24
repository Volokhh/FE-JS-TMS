
import { useState } from 'react'
import { Layout } from './components/layout/layout'
import AllPosts from './pages/allPosts'
import SelectedPost from './pages/selectedPost';
import { SignIn } from './pages/signIn';
import Success from './pages/success';

type Page = 'all' | 'selected' | 'signIn' | 'success';

const App = () => {
   const [page, setPage] = useState<Page>('all');
   const [selectedId, setSelectedId] = useState<number>(1);

   const openPost = (id: number) => {
      setSelectedId(id);
      setPage('selected');
   };

   return (
      <Layout onIconClick={() => setPage('signIn')}>
         {page === 'all' && <AllPosts onOpenPost={openPost} />}
         {page === 'selected' && (
            <SelectedPost
               postId={selectedId}
               onOpenPost={openPost}
               onBack={() => setPage('all')}
            />
         )}
         {page === 'signIn' && <SignIn onSuccess={() => setPage('success')} />}
         {page === 'success' && <Success onGoHome={() => setPage('all')} />}
      </Layout>
   );
};


export default App
