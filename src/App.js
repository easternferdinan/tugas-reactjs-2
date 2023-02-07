import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

function App({name}) {
  return (
    <div>
      <Navbar />
      <Welcome name={name}/>
      <Footer />
    </div>
  );
}

export default App;
