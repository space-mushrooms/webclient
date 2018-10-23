export default {
  EXPAND: 'expand',
  SLIDE: 'slide',
};

export function createTransition(type, payload = {}) {
  return {type, payload};
}
