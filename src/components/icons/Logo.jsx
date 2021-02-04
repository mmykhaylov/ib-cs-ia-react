import PropTypes from 'prop-types';

function Logo({ color, height }) {
  return (
    <svg viewBox="0 0 512 512" height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M354.132 375.377V136.623c13.008-.397 23.471-11.095 23.471-24.198 0-12.182-9.043-22.288-20.767-23.968C350.305 38.334 307.27 0 256 0c-21.039 0-41.229 6.37-58.387 18.422-3.396 2.385-4.216 7.072-1.83 10.468s7.073 4.216 10.468 1.83C220.867 20.455 238.07 15.029 256 15.029c42.941 0 79.099 31.55 85.614 73.178H170.391a86.182 86.182 0 0115.998-38.145 7.516 7.516 0 00-12.064-8.964 101.184 101.184 0 00-19.158 47.359c-11.726 1.679-20.769 11.785-20.769 23.968 0 13.103 10.462 23.801 23.471 24.198v238.754c-13.008.397-23.471 11.095-23.471 24.198 0 12.182 9.043 22.287 20.767 23.968C161.695 473.666 204.73 512 256 512s94.305-38.334 100.835-88.457c11.724-1.68 20.767-11.786 20.767-23.968 0-13.102-10.462-23.801-23.47-24.198zM250.91 333.58a7.514 7.514 0 00-10.627 0l-41.778 41.778h-25.606V349.71l166.204-166.205v51.254l-77.565 77.565c-2.736 2.736-2.918 7.255-.399 10.196 2.81 3.282 7.97 3.488 11.026.431l66.938-66.938v51.254l-68.09 68.089h-51.254l31.151-31.151a7.513 7.513 0 000-10.625zm-31.215-196.938l-46.797 46.797v-46.797zm41.598 41.538c2.895 2.895 7.732 2.895 10.627 0l41.538-41.538h25.645v25.61L172.898 328.456v-51.254l77.768-77.767a7.514 7.514 0 000-10.627 7.513 7.513 0 00-10.627 0l-67.14 67.14v-51.254l68.051-68.051h51.254l-30.91 30.911a7.512 7.512 0 00-.001 10.626zm77.809 150.343v46.835h-46.836zM149.427 112.425c0-5.067 4.122-9.188 9.188-9.188h194.77c5.066 0 9.188 4.122 9.188 9.188s-4.122 9.188-9.188 9.188h-194.77c-5.066 0-9.188-4.122-9.188-9.188zM256 496.971c-42.941 0-79.099-31.551-85.614-73.178h171.228c-6.515 41.627-42.673 73.178-85.614 73.178zm97.385-88.207h-194.77c-5.066 0-9.188-4.122-9.188-9.188s4.122-9.188 9.188-9.188h194.77c5.066 0 9.188 4.122 9.188 9.188s-4.122 9.188-9.188 9.188z"
        fill={color}
      />
    </svg>
  );
}

Logo.propTypes = {
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default Logo;
