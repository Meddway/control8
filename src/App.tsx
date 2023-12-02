import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import CreateQuote from './components/CreateQuote/CreateQuote';
import Category from './containers/Category/Category';

const App = () => (
  <>
    <header>
      <Toolbar/>
    </header>
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={(<Home/>)}/>
        <Route path="/add-quote" element={<CreateQuote/>} />
        <Route path="/quotes/all" element={<Category category="All" />} />
        <Route path="/quotes/star-wars" element={<Category category="Star Wars" />} />
        <Route path="/quotes/famous-people" element={<Category category="Famous People" />} />
        <Route path="/quotes/saying" element={<Category category="Saying" />} />
        <Route path="/quotes/humor" element={<Category category="Humor" />} />
        <Route path="/quotes/motivational" element={<Category category="Motivational" />} />
        <Route path="*" element={(<h1>Not Found!</h1>)}/>
      </Routes>
    </main>
  </>
);

export default App;
