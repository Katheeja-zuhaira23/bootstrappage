import React from 'react'

function Test({comments}) {
  return <>
   
                    <div class="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={`${comments.src}`} alt="..." />
                            <h5>{comments.h5}</h5>
                            <p className="font-weight-light mb-0">{comments.cmt}</p>
                        </div>
                    </div>
    
  </>
}

export default Test