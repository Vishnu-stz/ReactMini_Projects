
import React from 'react'

function NewC({data}) {

    return (
    
        <div>

             <h1> New Component </h1>

            {
                data.map(i => 
                    
                        <div>
                            
                                <h1> Name : {i.name} </h1>
                                <h3> Age : {i.age} </h3>

                        </div>        

                    )
            }

        </div>

    )

}

export default NewC