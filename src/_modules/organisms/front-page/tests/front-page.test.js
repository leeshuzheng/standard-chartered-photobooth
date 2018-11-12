'use strict';

import FrontPage from '../front-page';

describe('FrontPage View', function() {

  beforeEach(() => {
    this.frontPage = new FrontPage();
  });

  it('Should run a few assertions', () => {
    expect(this.frontPage);
  });

});
