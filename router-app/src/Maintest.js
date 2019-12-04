import React from 'react';


const Maintest =({match}) =>{

    const names = match.params.obj;

    


    return(
        <div>hi2
            <hr></hr>
            {names}
        </div>


    );

}

export default Maintest;