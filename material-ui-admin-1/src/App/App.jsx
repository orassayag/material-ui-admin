import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';
import Employees from '../pages/Employees/Employees/Employees';
import './App.scss';

const App = () => {

  return (
    <>
      <SideMenu />
      <div className="app-main">
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </>
  );
};

export default App;