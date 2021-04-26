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

// Events Page
import Events from './events/events'
import ScrollIntoView from './components/scroll/scroll'



function App() {
  
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" >
          <Header />
          <Content />
          <Footer />
        </Route>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/about" component={ScrollIntoView(About)}/>
        <Route exact path="/shows" component={Shows}/>
        <Route exact path="/events" component={Events}/>
        

      </Switch>
      <Cfoota />



    </Router>

  );
}

export default App;
