
import { Route, Routes } from 'react-router-dom';
import AuthorDetail from './components/author/AuthorDetail';
import BlogDetail from './components/blog/BlogDetail';
import HomePage from './components/home/HomePage';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/shared/ScrollToTop';


function App() {
  return (
    <>
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blogs/:slug' element={<BlogDetail/>}/>
          <Route path='/authors/:slug' element={<AuthorDetail/>}/>

        </Routes>
      </Layout>
    </>
  );
}

export default App;
