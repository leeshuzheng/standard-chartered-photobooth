'use strict';

import DisplayGif from '../display-gif';

describe('DisplayGif View', function() {

  beforeEach(() => {
    this.displayGif = new DisplayGif();
  });

  it('Should run a few assertions', () => {
    expect(this.displayGif);
  });

});
