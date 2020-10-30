import './App.scss';
import Footer from './Footer';
import Header from './Header';
import LaunchListFilters from './LaunchListFilters';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <LaunchListFilters />
        {/* Launch list */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
