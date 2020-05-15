import React from 'react';
import PropTypes from 'prop-types';

function Login({ firstColor, secondColor, height }) {
  return (
    <svg
      height={height}
      version="1.1"
      viewBox="0 0 512 512"
      style={{ enableBackground: 'new 0 0 512 512' }}
    >
      <path
        d="M356.453,243.741l-54.781-38.621c-9.926-6.997-23.644,0.128-23.644,12.26v23.621H15c-8.284,0-15,6.716-15,15
			s6.716,15,15,15h263.028v23.62c0,12.212,13.791,19.203,23.643,12.26l54.781-38.62
      C364.916,262.296,364.909,249.714,356.453,243.741z"
        fill={secondColor}
      />
      <path
        d="M278.406,22.407c-86.155,0-161.824,46.757-202.333,116.783c-4.148,7.171-1.698,16.347,5.473,20.495
			c7.172,4.148,16.347,1.696,20.495-5.474c35.237-60.91,101.094-101.804,176.365-101.804C390.668,52.407,482,143.738,482,256.001
			s-91.332,203.594-203.594,203.594c-75.317,0-141.153-40.934-176.366-101.807c-4.148-7.171-13.323-9.62-20.495-5.474
			c-7.171,4.148-9.622,13.324-5.473,20.495c40.519,70.047,116.201,116.785,202.334,116.785C407.514,489.595,512,385.119,512,256.001
      C512,126.892,407.525,22.407,278.406,22.407z"
        fill={firstColor}
      />
    </svg>
  );
}

Login.propTypes = {
  firstColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default Login;
