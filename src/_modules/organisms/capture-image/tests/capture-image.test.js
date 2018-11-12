'use strict';

import CaptureImage from '../capture-image';

describe('CaptureImage View', function() {

  beforeEach(() => {
    this.captureImage = new CaptureImage();
  });

  it('Should run a few assertions', () => {
    expect(this.captureImage);
  });

});
