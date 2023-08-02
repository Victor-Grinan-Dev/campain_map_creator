import React from 'react';
import { useSelector } from 'react-redux';

//images
const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";


const Gates = () => {
  const userType = useSelector(state => state.portal.currentUser.type)

  const showUserType = () => {
    switch (userType) {
      case undefined:
      return (
        <>
          <div className="gates">
            <img className="gate" src={visitor} alt="visitor" />
            <img className="gate" src={admin} alt="admin" />
            <img className="gate" src={user} alt="user" />
          </div>
        </>
      )
        
      case "visitor":
        return (
          <>
            <img className="gate" src={visitor} alt="visitor" />
          </>
        )
      case "admin":
        return (
          <>
            <img className="gate animatedGate" src={admin} alt="admin" />
          </>
        )
      case "user":
        return (
          <>
            <img className="gate" src={user} alt="user" />
          </>
        )
      default:
        return 0;
    }
  }

  return (
   
    showUserType()
    
  )
}

export default Gates;