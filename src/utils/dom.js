import memoize from 'lodash/memoize';
import {isWebkit} from './userAgent';

export function getViewportHeight() {
  return Math.max(global.document.documentElement.clientHeight, global.innerHeight || 0);
}

export function getViewportWidth() {
  return Math.max(global.document.documentElement.clientWidth, global.innerWidth || 0);
}

export function isCss1CompatMode(doc) {
  return doc.compatMode === 'CSS1Compat';
}

export function getPageOffsetTop(element) {
  let offset = element.offsetTop || 0;
  let current = element;
  while (current && current.offsetParent) {
    current = current.offsetParent;
    offset += current.offsetTop || 0;
  }
  return offset;
}

export function getDocumentScrollElement(doc = global.document) {
  if (doc.scrollingElement) {
    return doc.scrollingElement;
  }
  if (!isWebkit() && isCss1CompatMode(doc)) {
    return doc.documentElement;
  }
  return doc.body || doc.documentElement;
}

export function resetPageScroll(doc = global.document) {
  const element = getDocumentScrollElement();
  element.scrollLeft = 0;
  element.scrollTop = 0;
}

export function createInput(name, type, value) {
  const input = global.document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  return input;
}

export function sendForm(method, action, data = {}, target = '_self') {
  const form = global.document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', action);
  form.setAttribute('target', target);

  Object.keys(data || {}).forEach(key => {
    const value = data[key];
    if (Array.isArray(value)) {
      value.forEach(val => form.appendChild(createInput(`${key}[]`, 'hidden', val)));
    } else {
      form.appendChild(createInput(key, 'hidden', value));
    }
  });

  global.document.body.appendChild(form);
  form.submit();
}

export function externalRedirect(method, url, body) {
  if (method.toLowerCase() === 'get') {
    global.location.href = url;
  } else {
    sendForm(method, url, body);
  }
}

export function loadAsyncScript(src, attributes) {
  return new Promise((resolve, reject) => {
    const sibling = global.document.getElementsByTagName('script')[0];
    const script = global.document.createElement('script');
    if (attributes) {
      Object.keys(attributes).forEach(name => script.setAttribute(name, attributes[name]));
    }
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    script.onload = () => setTimeout(resolve, 0);
    script.onerror = reject;
    sibling.parentNode.insertBefore(script, sibling);
  });
}

export const isPassiveSupported = memoize(() => {
  let passiveSupported = false;

  try {
    const options = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: () => {
        passiveSupported = true;
      },
    });

    global.addEventListener('test', options, options);
    global.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
});

export const isElementInViewport = element => {
  if (!element) {
    return false;
  }
  const {top, left, bottom, right} = element.getBoundingClientRect();
  return top >= 0 && left >= 0 && bottom <= getViewportHeight() && right <= getViewportWidth();
};
