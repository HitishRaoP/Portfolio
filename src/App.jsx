import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact'
import './app.css'
import './components/contact/contact.css'
import './components/intro/intro.css'
import './components/portfolio/Portfolio.css'
import './components/testimonials/Testimonials.css'
import './components/works/Works.css'


function App() {
  return (

    <div className="app">
      <Topbar />
        
      <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />



      </div>
    </div>
  );
}

export default App;