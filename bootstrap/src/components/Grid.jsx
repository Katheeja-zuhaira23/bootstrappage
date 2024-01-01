import React from 'react'

function Grid({icon}) {
  return <>
    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={icon.url}></i></div>
                            <h3>{icon.h3}</h3>
                            <p className="lead mb-0">{icon.p}</p>
                        </div>
                    </div>
  </>
}

export default Grid