import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Error404(props){

  return(
    <div>
      <style jsx>{`
      a{
        color: pink;

      }
      `}</style>
     
      <h2>Would you like to return <Link to='/'><a>home</a> </Link>instead?</h2>
     
    </div>
  );
}
Error.propTypes = {
  location: PropTypes.object
};

export default Error404;