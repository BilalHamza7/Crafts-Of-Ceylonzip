import React from 'react'
import { NavigationBar2 } from '../components/NavigationBar'
import { UserProfileSideBar, SellerProfileSideBar } from '../components/ProfileSideBar'


export default function UserProfile() {
  return (
    <div>
        <NavigationBar2/>
        <div className='productStartDiv' style={{display:"flex", width:"100%",margin:"0",padding:"0"}}>

            <div style={{flex:"20%"}}>
                <UserProfileSideBar />
            </div>
            <div style={{flex:"80%"}}>
                {/* <AccountDetails /> */}
            </div> 

        </div>
    </div>
  )
}
