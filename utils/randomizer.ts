function mulberry32(seed: number) {
    return function() {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }
  
  export const getRandomAvatar = (avatars: string[], seed?: number): string => {
    const randomFunc = seed !== undefined ? mulberry32(seed) : Math.random;
    const randomIndex = Math.floor(randomFunc() * avatars.length);
    return avatars[randomIndex];
  };
  