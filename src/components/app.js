import '../styles/main.scss';
import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <div className="col-lg-12">
            <h1 className="text-center">React-Redux Weather</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
