'use strict';

import $ from 'jquery';
import Webcam from 'webcamjs';
import DisplayGif from  '../display-gif/display-gif';
import html2canvas from 'html2canvas';


export default class CaptureImage {
  constructor() {

    let captureImage = $('.capture-image'),
    count = 0,
    delay = 2000,
    interval = 1000,
    imagesArray = new Array(),
    goToDisplayGifDelay = 1800;

    captureImage.addClass('show');


    // webcam init earlier on
    let takePictureTimeout = setTimeout(function() {

      let takePictureInterval = setInterval(function() {

        if (count < 3) {
          takePicture(count);
        } else {

          clearInterval(takePictureInterval);

          let goToDisplayGifTimeout = setTimeout(function() {

            captureImage.removeClass('show');

            // pass imagesArray to DisplayGif to convert to gif
            // new DisplayGif(imagesArray);

          }, goToDisplayGifDelay); // ~ 1800 milliseconds delay

        }

        count++;

      }, interval); // interval is ~ 1000 seconds


    }, delay);

    function takePicture(index) {

      console.log('takePicture called');

      Webcam.snap(function(dataURI) {

        imagesArray.push(dataURI);

        document.body.innerHTML += `<img class="image_${index}"src="${dataURI}" />`;


        html2canvas(document.querySelector('.image_1')).then(canvas => {

          document.body.appendChild(canvas);

          // let Base64String = getBase64FromCanvas(canvas);
          //
          // imagesArray.push(Base64String);

        });

      });
    }

  }
}
