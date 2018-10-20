import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  rocket: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  streamTs: PropTypes.number.isRequired,
  launchTs: PropTypes.number.isRequired,
});
