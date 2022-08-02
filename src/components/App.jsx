import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query === query) {
      toast.info('We already found it');
    }
  }

  searchImg = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchImg} />
        <ImageGallery query={query} />
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    );
  }
}
