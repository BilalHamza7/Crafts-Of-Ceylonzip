import React from 'react'
import { NavigationBar2 } from '../components/NavigationBar'
import { UserProfileSideBar } from '../components/ProfileSideBar'
import AccountDetails from '../components/UserAccountDetails';
import { useState } from 'react';


export default function UserProfile() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        <NavigationBar2/>
        <div className='productStartDiv' style={{display:"flex", width:"100%",margin:"0",padding:"0"}}>

            <div style={{flex:"25%", border:"1px solid black"}}>
                <UserProfileSideBar onOptionClick={handleOptionClick}/>
            </div>
            <div style={{flex:"75%", border:"1px solid black"}}>
            {selectedOption === 'Account Details' ? (<AccountDetails />) : (<h2>Orders Have to Complete Once You finish let me know</h2>)}
            </div> 

        </div>
    </div>
  )
}
