import Banner from './Components/Banner/Banner';
import Deals from './Components/Deals/Deals';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navber/Navbar';
import Newsletters from './Components/Newsletters/Newsletters';
import Popular from './Components/Popular/Popular';
import Testimonial from './Components/Testimonial/Testimonial';
import TravelBlog from './Components/TravelBlog/TravelBlog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Featured></Featured>
      <Deals></Deals>
      <Popular></Popular>
      <Testimonial></Testimonial>
      <TravelBlog></TravelBlog>
      <Newsletters></Newsletters>
      <Footer></Footer>
    </div>
  );
}

export default App;
