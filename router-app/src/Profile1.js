import React from 'react';

const data = [
    {
        name:'김민준',
        description : '설명1'
    },
    {
        name:'자바',
        description : '설명1'
    }
]

const Profile1 = ({match})=>{

    const names = match.params.num;
    console.log(names);
    const profile = data[parseInt(names)].name;



    return(
        <div>
            <h3>{profile}</h3>
        </div>

    );
}

export default Profile1;