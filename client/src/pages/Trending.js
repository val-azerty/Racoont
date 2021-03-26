import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { UidContext } from '../components/AppContext'
import LeftNav from '../components/LeftNav'
import { isNotEmpty } from '../components/Utils'
import Card from '../components/Post/Card'
import Trends from '../components/Trends'
import FriendsHint from '../components/Profil/FriendsHint'

const Trending = () => {

    const uid = useContext(UidContext)
    const trendingList = useSelector((state) => state.trendingReducer)

    return (
        <div className="trending-page">
            <LeftNav/>
            <div className="main">
                {isNotEmpty(trendingList[0]) && trendingList.map((post) => 
                <Card post={post} key={post._id}/>)}
            </div>
            <div className="right-side">
                <div className="right-side-container">
                    <Trends/>
                    {uid && <FriendsHint/>}
                </div>
            </div>
        </div>
    )
}

export default Trending
