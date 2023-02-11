import React from 'react'
import PropTypes from 'prop-types'

function About(props){
    return (
      <div data-bs-theme={`${props.mode=== 'dark'? 'light':'dark'}`} className='d-flex justify-content-center '><p className='fs-4'> Helpful website that makes you remove extra spaces ,Convert to uppercase lowercase and many more.</p> </div>
    )
  }

  export default About;