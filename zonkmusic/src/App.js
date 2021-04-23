import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './styling/darktheme.css' ;
// import './styling/animation.css';

// Across all pages 
// import Navbar from './components/headers/navbar';
import Cfoota from './components/footer/foota3';

// Home page 
import Header from './components/headers/header';
import Content from './components/content/maincont';
import Footer from './components/footer/footer';


// Contact page 
import Contact from './contact/contact';

// Gallery page 
import Gallery from './gallery/gallery' ;

// Blog Page 
import Blog from './blog/blog';

// About Page 
import About from './about/about' 

// Shows Page
import Shows from './shows/shows' 




function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact>
          <Header />
          <Content />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/gallery" exact>
          <Gallery />
        </Route>
        <Route path="/blog" exact >
          <Blog />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/shows" exact>
          <Shows />
        </Route>


      </Switch>
      <Cfoota />



    </Router>

  );
}

export default App;
