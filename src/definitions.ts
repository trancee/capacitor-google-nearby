declare module "@capacitor/core" {
  interface PluginRegistry {
    GoogleNearby: GoogleNearbyPlugin;
  }
}

export interface GoogleNearbyPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
