'use strict';

import $ from 'jquery';

export default class FrontPage {
  constructor(nextPage) {

    let frontPage = $('.front-page');

    frontPage.click(function() {

      $(this).removeClass('show');
      $('.lots-of-likes').addClass('show');

    });
  }
}
