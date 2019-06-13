import React from 'react';
import SearchBar from './components/SearchBar';
import WorkOrder from './components/WorkOrder';
import './sass/main.scss';

class App extends React.Component {
  render(){
    return (
      <div className="position-contain">
        <div className="container">
          <SearchBar />
          <WorkOrder />
        </div>
      </div>
    );
  }
}

export default App;
