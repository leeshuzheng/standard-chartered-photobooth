'use strict';

import LotsOfLikes from '../lots-of-likes';

describe('LotsOfLikes View', function() {

  beforeEach(() => {
    this.lotsOfLikes = new LotsOfLikes();
  });

  it('Should run a few assertions', () => {
    expect(this.lotsOfLikes);
  });

});
