export const launchMockRightNow = {
  id: '1',
  mission: 'Commercial Crew SpaceX',
  rocket: 'SpaceX Falcon Heavy',
  video: 'https://coubsecure-s.akamaihd.net/get/b151/p/coub/simple/cw_file/9797a93278f/1b689ed594b9b17f88b2e/gifv_1539470990_5362149_gifv.mp4',
  image: 'https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg',
  launchTs: Date.now() - 1000,
  streamTs: Date.now() - 1000,
};

export const launchMockDate = {
  id: '2',
  mission: 'Commercial Crew SpaceX',
  rocket: 'SpaceX Falcon Heavy',
  video: 'https://coubsecure-s.akamaihd.net/get/b151/p/coub/simple/cw_file/9797a93278f/1b689ed594b9b17f88b2e/gifv_1539470990_5362149_gifv.mp4',
  image: 'https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg',
  launchTs: Date.now() + (1000 * 60 * 60 * 24 * 10),
  streamTs: Date.now() + (1000 * 60 * 60 * 24 * 10),
};

export const launchMockTimer = {
  id: '3',
  mission: 'Commercial Crew SpaceX',
  rocket: 'SpaceX Falcon Heavy',
  video: 'https://coubsecure-s.akamaihd.net/get/b151/p/coub/simple/cw_file/9797a93278f/1b689ed594b9b17f88b2e/gifv_1539470990_5362149_gifv.mp4',
  image: 'https://images-assets.nasa.gov/image/201304210010HQ/201304210010HQ~medium.jpg',
  launchTs: Date.now() + (1000 * 60 * 60 * 2),
  streamTs: Date.now() + (1000 * 60 * 60 * 2),
}