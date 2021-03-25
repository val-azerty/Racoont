import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { followUser, unfollowUser } from "../../actions/user.actions"
import { isNotEmpty } from "../Utils"

const FollowHandler = ({ idToFollow }) => {
   const userData = useSelector((state) => state.userReducer)
   const [isFollowed, setIsFollowed] = useState(false)
   const dispatch = useDispatch()

   const handleFollow = () => {
      dispatch(followUser(userData._id, idToFollow))
      setIsFollowed(true)
   }

   const handleUnfollow = () => {
       dispatch(unfollowUser(userData._id, idToFollow))
       setIsFollowed(false)
   }

   useEffect(() => {
      if (isNotEmpty(userData.following)) {
         if (userData.following.includes(idToFollow)) {
            setIsFollowed(true)
         } else {
            setIsFollowed(false)
         }
      }
   }, [userData, idToFollow])

   return (
      <>
         {isFollowed && isNotEmpty(userData) && (
            <span onClick={handleUnfollow}>
               <button className="unfollow-btn">Abonné</button>
            </span>
         )}
         {isFollowed === false && isNotEmpty(userData) && (
            <span onClick={handleFollow}>
               <button className="follow-btn">Suivre</button>
            </span>
         )}
      </>
   )
}

export default FollowHandler
