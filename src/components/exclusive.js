import React from 'react'
import CreatorImage from '../assets/creator_1.svg'
import LikeImage from '../assets/like.svg'
import Vector from '../assets/vector.svg'

const exclusive = () => {
    return (
        <div className="exclusive-container">
            <span className="exclusive-top">
                <h1>Exclusive drops</h1><button className="category-btn">All Category <img src={Vector} alt=""/></button>
            </span>
            <div className="card-container-1">
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <h6>Days of future past</h6>
                        <span className="sub-card-text">
                            <img className="creator-img" src={CreatorImage} alt="creator_img"/>
                            <p className="creator-name">Madmax Pro</p>
                            <p className="number-of-like">966</p>
                            <img className="like-img" src={LikeImage} alt="like_img"/>
                        </span>
                    </div>
                    <div className="card-bid">
                        <span className="bid-col-1">
                            <p className="value-heading">Current Bid</p>
                            <p className="bid-value">$ 2,405</p>
                        </span>
                        <span className="bid-col-2">
                            <p className="time-heading">Ending In</p>
                            <p className="bid-timing">🔥 16:12:15</p>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <h6>Days of future past</h6>
                        <span className="sub-card-text">
                            <img className="creator-img" src={CreatorImage} alt="creator_img"/>
                            <p className="creator-name">Madmax Pro</p>
                            <p className="number-of-like">966</p>
                            <img className="like-img" src={LikeImage} alt="like_img"/>
                        </span>
                    </div>
                    <div className="card-bid">
                        <span className="bid-col-1">
                            <p className="value-heading">Current Bid</p>
                            <p className="bid-value">$ 2,405</p>
                        </span>
                        <span className="bid-col-2">
                            <p className="time-heading">Ending In</p>
                            <p className="bid-timing">🔥 16:12:15</p>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <h6>Days of future past</h6>
                        <span className="sub-card-text">
                            <img className="creator-img" src={CreatorImage} alt="creator_img"/>
                            <p className="creator-name">Madmax Pro</p>
                            <p className="number-of-like">966</p>
                            <img className="like-img" src={LikeImage} alt="like_img"/>
                        </span>
                    </div>
                    <div className="card-bid">
                        <span className="bid-col-1">
                            <p className="value-heading">Current Bid</p>
                            <p className="bid-value">$ 2,405</p>
                        </span>
                        <span className="bid-col-2">
                            <p className="time-heading">Ending In</p>
                            <p className="bid-timing">🔥 16:12:15</p>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-text">
                        <h6>Days of future past</h6>
                        <span className="sub-card-text">
                            <img className="creator-img" src={CreatorImage} alt="creator_img"/>
                            <p className="creator-name">Madmax Pro</p>
                            <p className="number-of-like">966</p>
                            <img className="like-img" src={LikeImage} alt="like_img"/>
                        </span>
                    </div>
                    <div className="card-bid">
                        <span className="bid-col-1">
                            <p className="value-heading">Current Bid</p>
                            <p className="bid-value">$ 2,405</p>
                        </span>
                        <span className="bid-col-2">
                            <p className="time-heading">Ending In</p>
                            <p className="bid-timing">🔥 16:12:15</p>
                        </span>
                    </div>
                </div>          
            </div>
            <div className="exclusive-bottom">
                <button className="view-btn">View all drops</button>
            </div>
        </div>
    )
}

export default exclusive
