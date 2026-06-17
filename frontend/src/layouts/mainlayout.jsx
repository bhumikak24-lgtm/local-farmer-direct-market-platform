import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
