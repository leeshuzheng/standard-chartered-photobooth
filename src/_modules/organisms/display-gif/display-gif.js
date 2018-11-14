'use strict';

import $ from 'jquery';
import gifshot from 'gifshot';

export default class DisplayGif {
  constructor(array) {


    let displayGif = $('.display-gif');

    displayGif.addClass('show');

    console.log(gifshot);
    console.log(array);

    var createGIF = function() {

      gifshot.createGIF({
        images: array,
        interval: .8,
        numFrames: 3,
        gifWidth: 400,
        gifHeight: 300
    }, function(obj) {

      if (!obj.error) {

        var image = obj.image,
        animatedImage = document.getElementById('animatedGIF');

        animatedImage.src = image;
      }
    })
  };


  createGIF();

}
}
