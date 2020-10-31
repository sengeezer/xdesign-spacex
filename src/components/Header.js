import logo from '../assets/spacex-logo.png';

const Header = () => (
  <header className="App-header">
    <img src={logo} alt="SpaceX Logo" className="App-logo" />
    <h1>Launches</h1>
    <button>Reload Data ⟲</button>
  </header>
);

export default Header;
