import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListEntry from './VideoListEntry.js';

/*
1. Make title onClick
  Get the ID associated with the title
  Loop through the exampleData array
    compare onClick ID to exampleData[0] ID
    this.setState(state => ({videoPlayer: exampleVideoData[index]}))


*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      videoPlayer: exampleVideoData[0]
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(e) {
    // retreive on click id
    // iterater over videoList
    // compare
    for (var i = 0; i < exampleVideoData.length; i++) {
      if (e.target.id === exampleVideoData[i].id.videoId) {
        this.setState({
          videoPlayer: exampleVideoData[i]
        });
      }
    }

  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video = {this.state.videoPlayer}/> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos = {this.state.videoList} onTitleClick = {this.onTitleClick} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
