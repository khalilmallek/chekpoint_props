import React from 'react'

const Profile = ({profile,children}) => {
    return (
        <div className='profile'>
            {profile.map((el,index)=><div key={index}>
                <img src={children} style={{width:'200px',height:'200px'}}/>
                <h1>{el.name}</h1>
                <h3>{el.profession}</h3>
                <p>{el.bio}</p>
            </div>)}
        </div>
    )
}

export default Profile;
