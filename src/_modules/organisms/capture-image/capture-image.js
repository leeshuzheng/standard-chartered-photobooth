'use strict';

import $ from 'jquery';
import Webcam from 'webcamjs';

export default class CaptureImage {
  constructor() {

    let captureImage = $('.capture-image');
    captureImage.addClass('show');
    
    Webcam.attach('#camera');
  }
}
