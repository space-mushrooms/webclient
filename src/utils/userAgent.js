import UAParser from 'ua-parser-js';
import memoize from 'lodash/memoize';

export const OS = {
  ANDROID: 'Android',
  IOS: 'iOS',
};

export const Engine = {
  WEBKIT: 'WebKit',
};

export const DeviceType = {
  CONSOLE: 'console',
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMARTTV: 'smarttv',
  WEARABLE: 'wearable',
  EMBEDDED: 'embedded',
};

const parser = new UAParser();
export default parser;

export const parseUserAgent = memoize((userAgent = global.navigator.userAgent) => (
  parser.setUA(userAgent).getResult()
));

export function isMobileOrTabletDevice() {
  const {type} = parseUserAgent().device;
  return type === DeviceType.MOBILE || type === DeviceType.TABLET;
}

export function hasMobileAppForDevice() {
  const os = parseUserAgent().os.name;
  return os === OS.ANDROID || os === OS.IOS;
}

export function isWebkit() {
  return parseUserAgent().engine.name === Engine.WEBKIT;
}
