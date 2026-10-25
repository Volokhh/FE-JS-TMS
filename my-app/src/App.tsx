
import { useState } from 'react'
import { Layout } from './components/Layout/Layout'
import AllPosts from './Pages/AllPosts'
import SelectedPost from './Pages/SelectedPost';
import { SignIn } from './Pages/SignIn';
import Success from './Pages/Success';

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
