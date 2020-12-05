var searchYouTube = (options, callback) => {
  // TODO


  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key,
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: true
  })
    .done(function(data) {
      console.log('Invoke callback here',data);
      callback(data.items);
    })
    .fail(function(err) {
      console.log('something went bad', err);
    });
};



export default searchYouTube;
