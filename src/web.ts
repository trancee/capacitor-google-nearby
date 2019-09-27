import { WebPlugin } from '@capacitor/core';
import { GoogleNearbyPlugin } from './definitions';

export class GoogleNearbyWeb extends WebPlugin implements GoogleNearbyPlugin {
  constructor() {
    super({
      name: 'GoogleNearby',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const GoogleNearby = new GoogleNearbyWeb();

export { GoogleNearby };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GoogleNearby);
