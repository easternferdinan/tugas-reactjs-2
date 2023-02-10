import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';
import './style/basic_components.css'

export default function BasicComponents() {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Footer />
        </div>
    );
}