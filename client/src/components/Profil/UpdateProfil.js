import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateBio } from "../../actions/user.actions"
import LeftNav from "../LeftNav"
import UploadImg from "./UploadImg"

const UpdateProfil = () => {
   const [bio, setBio] = useState("")
   const [updateForm, setUpdateForm] = useState(false)
   const userData = useSelector((state) => state.userReducer)
   const dispatch = useDispatch()

   const handleUpdate = (e) => {
      dispatch(updateBio(userData._id, bio))
      setUpdateForm(false)
   }

   return (
      <div className="profil-container">
         <LeftNav />
         <h1>Profil de {userData.pseudo}</h1>
         <div className="update-container">
            <div className="left-part">
               <h3>Photo de profil</h3>
               <img src={userData.picture} alt="user-pic" />
               <UploadImg />
            </div>
            <div className="right-part">
               <h3>Bio</h3>
               {updateForm === false && (
                  <>
                     <p onClick={() => setUpdateForm(!updateForm)}>
                        {userData.bio}
                     </p>
                     <button onClick={() => setUpdateForm(!updateForm)}>
                        Modifier bio
                     </button>
                  </>
               )}
               {updateForm && (
                  <>
                     <textarea
                        type="text"
                        defaultValue={userData.bio}
                        onChange={(e) => setBio(e.target.value)}
                     ></textarea>
                     <button onClick={handleUpdate}>
                        Valider modifications
                     </button>
                  </>
               )}
            </div>
         </div>
      </div>
   )
}

export default UpdateProfil
