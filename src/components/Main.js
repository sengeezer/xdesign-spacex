import LaunchList from './LaunchList';
import LaunchListFilters from './LaunchListFilters';

import launchHome from '../styles/img/launch-home.png';
import launchHome2x from '../styles/img/launch-home@2x.png';
import launchHome3x from '../styles/img/launch-home@3x.png';

const Main = () => {
  return (
    <main>
      <picture>
        <source srcSet={`${launchHome}, ${launchHome2x} 2x, ${launchHome3x} 3x`} />
        <img src={launchHome} alt="Background launchpad and rocket" />
      </picture>
      <div className="LaunchList-container">
        <LaunchListFilters />
        <LaunchList />
      </div>
    </main>
  );
};

export default Main;
