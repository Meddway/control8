import Toolbar from './components/Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import CreateQuote from './components/CreateQuote/CreateQuote';
import Category from './containers/Category/Category';
import All from './containers/All/All';

const App = () => (
  <>
    <header>
      <Toolbar />
    </header>
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-quote" element={<CreateQuote />} />
        <Route path="/quotes" element={<All />} />
        <Route path="/quotes/:category" element={<Category />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </main>
  </>
);

export default App;
