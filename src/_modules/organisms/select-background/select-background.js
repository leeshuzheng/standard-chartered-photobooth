'use strict';

import $ from 'jquery'
import CaptureImage from '../capture-image/capture-image';


export default class SelectBackground {
  constructor() {

    let selectBackground = $('.select-background');

    selectBackground.click(function() {
      $(this).removeClass('show');

      new CaptureImage();
    })

  }
}
