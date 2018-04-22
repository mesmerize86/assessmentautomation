'use strict'

import fs from 'fs';

export function screenshot(filename){
  let screenshot = browser.screenshot();
  fs.writeFileSync('./successshots/' + filename + '.png');

  screenshot = browser.saveScreenshot('./successshots/' + filename + '.png');
  browser.saveScreenshot('./successshots/' + filename + '.png');
}
