import React from 'react'

function Images({showcase}) {
  return <>
    <div className="row g-0">
                    <div className={showcase.class} style={{backgroundImage: `url(${showcase.img})`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{showcase.h2}</h2>
                        <p className="lead mb-0">{showcase.para}</p>
                    </div>
                </div>
                
  </>
}

export default Images