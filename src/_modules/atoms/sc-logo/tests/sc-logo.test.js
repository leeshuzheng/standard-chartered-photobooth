'use strict';

import ScLogo from '../sc-logo';

describe('ScLogo View', function() {

  beforeEach(() => {
    this.scLogo = new ScLogo();
  });

  it('Should run a few assertions', () => {
    expect(this.scLogo);
  });

});
