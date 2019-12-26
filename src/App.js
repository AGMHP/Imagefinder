import React from 'react';
import './App.css';
import Searchbar from './Searchbar.js';
import unsplash from './routes/unsplash';
import ImageLink from './imageList/imageLink';


class App extends React.Component {
  state = { images: []}

  Search = async content => {
    const response = await unsplash.get('/search/photos',
      {params: { query: content}
    });
    this.setState({images: response.data.results});
  }  
  render(){
    return (
      <div className="App">
        <Searchbar onSubmit={this.Search} />
        {/* <form>
          
        </form> */}
        <ImageLink images={this.state.images}/>
      </div>
    );
  }
}

export default App;
