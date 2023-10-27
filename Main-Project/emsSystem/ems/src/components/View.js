import React from 'react'


function View() {

    return (

        <div className='container'> 

            <div className='container d vt mt-5 mb-5' style={{width : '60%'}}> 

                <div className='row p-1'>

                    <div className='col-lg-6'>
    
                        <img style={{width : '100%' , borderRadius : '150px'}} className='mt-4 d ' src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" /> 
    
                    </div>
    
                    <div className='col-lg-6 py-4'>
    
                        <ul className="list-group">

                            <a href='#/'> <li className="list-group-item rounded-5 mt-2 text-start vd" aria-current="true">  <span> Full Name <i class="fa-regular fa-face-smile-beam fa-bounce ms-1 me-2 ">   </i> </span>  : <strong className='ms-1' style={{color:'lightblue'}}> John Doe </strong>             </li> </a>
                            <a href='#/'> <li className="list-group-item mt-2 rounded-5 text-start vd">                      <span> Status    <i class="fa-solid fa-id-card fa-shake ms-1 me-2 ">              </i> </span>  : <strong className='ms-1' style={{color:'lightblue'}}> Active </strong>               </li> </a>
                            <a href='#/'> <li className="list-group-item mt-2 rounded-5 text-start vd">                      <span> Mobile    <i class="fa-solid fa-mobile-screen-button fa-shake ms-1 me-2 "> </i> </span>  : <strong className='ms-1' style={{color:'lightblue'}}> +91 1231234567 </strong>       </li> </a>
                            <a href='#/'> <li className="list-group-item mt-2 rounded-5 text-start vd">                      <span> Email     <i class="fa-regular fa-envelope fa-shake ms-1 me-2 ">           </i> </span>  :  <strong className='ms-1'style={{color:'lightblue'}}> john.doe@gmail.com </strong> </li> </a>
                            <a href='#/'> <li className="list-group-item mt-2 rounded-5 text-start vd">                      <span> Gender    <i class="fa-solid fa-person-half-dress fa-shake ms-1 me-2 ">    </i> </span>  : <strong className='ms-1' style={{color:'lightblue'}}> Male </strong>                 </li> </a>
                            <a href='#/'> <li className="list-group-item mt-2 rounded-5 text-start vd">                      <span> Location  <i class="fa-solid fa-map-location-dot fa-shake ms-1 me-2 ">     </i> </span>  : <strong className='ms-1' style={{color:'lightblue'}}> Kochi </strong>                </li> </a>

                        </ul>
    
                    </div>
    
                </div>

            </div>

        </div>

    )

}

export default View