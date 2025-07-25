import TopGreen from './Components/TopGreen/TopGreen';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'; // Make sure this exists
import { useLocation } from 'react-router-dom';

const LinkDrops = ({ children, setOpenCart }) => {
  const location = useLocation();
  const hideLayout = location.pathname === '/user'; // login page etc.

  return (
    <>
        {!hideLayout && <TopGreen />}
        {!hideLayout && <Navbar toggle={setOpenCart} />}

        <main>{children}</main>

        {!hideLayout && <Footer />}
    </>
  );
};

export default LinkDrops;




