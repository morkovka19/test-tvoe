import './page.css';
import Main from './main/Main';
import Header from './header/Header';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <div className="page__container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
