import { startSetLaunches } from '../actions/launches';
import logo from '../assets/spacex-logo.png';

const Header = () => {
  const onReloadData = () => {
    startSetLaunches();
  }

  return (
    <header className="App-header">
      <img src={logo} alt="SpaceX Logo" className="App-logo" />
      <h1>Launches</h1>
      <button className="refreshButton" onClick={onReloadData}>Reload Data ⟳</button>
    </header>
  );
};

export default Header;
