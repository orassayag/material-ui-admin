import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';
import './App.scss';

const App = () => {

  return (
    <>
      <SideMenu />
      <div className="app-main">
        <Header />
      </div>
    </>
  );
};

export default App;