'use strict';

import $ from 'jquery';

export default class LotsOfLikes {
  constructor() {

    let lotsOfLikes = $('.lots-of-likes');

    lotsOfLikes.click(function() {

      $(this).removeClass('show');
      $('.select-background').addClass('show');

    })

  }
}
