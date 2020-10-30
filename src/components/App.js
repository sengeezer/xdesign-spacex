import './App.scss';
import Footer from './Footer';
import Header from './Header';
import LaunchList from './LaunchList';
import LaunchListFilters from './LaunchListFilters';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <LaunchListFilters />
        <LaunchList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
