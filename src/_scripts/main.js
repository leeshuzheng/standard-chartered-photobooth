// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import FrontPage from '../_modules/organisms/front-page/front-page';
import LotsOfLikes from '../_modules/organisms/lots-of-likes/lots-of-likes';
import SelectBackground from '../_modules/organisms/select-background/select-background';
import CaptureImage from '../_modules/organisms/capture-image/capture-image';

$(() => {

  new FrontPage();
  new LotsOfLikes();
  new SelectBackground();

});
