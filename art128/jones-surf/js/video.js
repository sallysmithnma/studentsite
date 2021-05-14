/**
 * https://github.com/nk-o/video-worker
 *
 * https://unpkg.com/video-worker@1/dist/video-worker.min.js
 */

function log( pref, text ) {
 pref = pref === 'yt' ? 'YouTube' : pref;
}

var videos = {
  yt: 'https://www.youtube.com/embed/cZ5Td1iTYcM',
};

Object.keys( videos ).forEach( function( vendor ) {
  var videoUrl = videos[ vendor ];
  
  var videoObject = new VideoWorker( videoUrl, {
    autoplay: true,
    mute: true,
    volume: 0,
    loop: true,
    background: true,
  } );

  if ( videoObject.isValid() ) {
    // retrieve iframe/video dom element.
    videoObject.getVideo((video) => {
      var $parent = video.parentNode;
      var $div = document.getElementById( vendor );

      // insert video in the body.
      $div.appendChild(video);

      // remove temporary parent video element (created by VideoWorker).
      $parent.parentNode.removeChild($parent);

      log( vendor, 'Video Retrieved' );
    });

    videoObject.on('ready', () => {
      log( vendor, 'Ready' );
    });
    videoObject.on('started', () => {
      log( vendor, 'Started' );
    });
    videoObject.on('volumechange', () => {
      log( vendor, 'Volume Change' );
    });
    videoObject.on('timeupdate', () => {
      // log( vendor, 'Time Update' );
    });
    videoObject.on('play', () => {
      log( vendor, 'Play' );
    });
    videoObject.on('pause', () => {
      log( vendor, 'Pause' );
    });
    videoObject.on('ended', () => {
      log( vendor, 'Ended' );
    });
  }
} );