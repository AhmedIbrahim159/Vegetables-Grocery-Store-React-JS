import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './component/Navs';
import Header from './component/Header';
import GalleryD from './component/Gallery';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Navs />
      <Header />
      <GalleryD/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
