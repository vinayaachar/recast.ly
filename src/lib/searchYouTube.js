var searchYouTube = (options, callback) => {
  // TODO


  var request = $.ajax({
    cache: false,
    data: $.extend({
      key: options.key,
      part: 'snippet',
      q: options.query
    }, {
      maxResults: options.max,
    }),
    dataType: 'json',
    type: 'GET',
    timeout: 1999,
    url: 'https://www.googleapis.com/youtube/v3/search'
  });

  callback(request.responseJSON.items);

  return request;
};

var optionsExample = {
  key: 'AIzaSyBNITgGM98eXt4iZyLo5ajv5zVZF0ng0BE',
  max: '5',
  query: 'react'
};
// var callBackExample = (data) => {
//   expect(hasSameShape(data, exampleVideoData)).to.be.true;
//   done();
// };
console.log('searchYouTube -> ', searchYouTube(optionsExample));

export default searchYouTube;
