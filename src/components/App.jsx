import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListEntry from './VideoListEntry.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlag: false,
      videoList: [],
      videoPlayer: {},
      search: 'music'
    };
    this.onSearch = this.onSearch.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);
    this.loadSearch = this.loadSearch.bind(this);
  }

  loadSearch() {
    searchYouTube({key: YOUTUBE_API_KEY, query: this.state.search,
      max: 5}, (data) => this.setState({
      videoList: data,
      isFlag: true,
      videoPlayer: data[0]
    }));
  }

  componentDidMount() {
    this.loadSearch();
    // this.setState({videoPlayer: this.state.videoList[0]});
  }

  onTitleClick(e) {
    var arraylist = this.state.videoList;
    for (var i = 0; i < arraylist.length; i++) {
      if (e.target.id === arraylist[i].id.videoId) {
        console.log('e');

        this.setState({
          videoPlayer: arraylist[i]
        });
      }
    }
  }

  onSearch(e, string) {
    e.preventDefault();
    console.log('right here -> before  ', this.state.search);
    this.setState({search: string}, this.loadSearch);
    console.log('right here -> after  ', this.state.search);
  }

  render() {
    console.log('this.state.videoPlayer ->', this.state.videoPlayer);
    if (this.state.isFlag) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> <Search onSearchClick = {this.onSearch}/></h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div className="video-player"><h5><em>videoPlayer</em><VideoPlayer video={this.state.videoPlayer}/></h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><em>videoList</em> <VideoList videos={this.state.videoList} onTitleClick = {this.onTitleClick} /></h5></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div>  is loading </div>);

    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
