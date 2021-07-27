import React from 'react'
import FeaCardImage from '../assets/fea_card_1.svg'
import LargeCreatorImage from '../assets/large_creator_1.svg'

const featured = () => {
    return (
        <div className="featured-container">
            <h1>Featured Creators</h1>
            <div className="card-container-2">
                <div className="fea-card">
                    <div className="fea-card-image"></div>
                    <div className="fea-card-text">
                        <img src={LargeCreatorImage} alt="creator_img"/>
                        <h4>Aditi Agarwal</h4>
                        <p>Illustrator 3D</p>
                    </div>
                    <div className="fea-card-stat">
                        <div className="stat-col-1">
                            <p>Followers</p>
                            <h4>3467</h4>
                        </div>
                        <div className="stat-col-2">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
                <div className="fea-card">
                    <div className="fea-card-image"></div>
                    <div className="fea-card-text">
                        <img src={LargeCreatorImage} alt="creator_img"/>
                        <h4>Aditi Agarwal</h4>
                        <p>Illustrator 3D</p>
                    </div>
                    <div className="fea-card-stat">
                        <div className="stat-col-1">
                            <p>Followers</p>
                            <h4>3467</h4>
                        </div>
                        <div className="stat-col-2">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
                <div className="fea-card">
                    <div className="fea-card-image"></div>
                    <div className="fea-card-text">
                        <img src={LargeCreatorImage} alt="creator_img"/>
                        <h4>Aditi Agarwal</h4>
                        <p>Illustrator 3D</p>
                    </div>
                    <div className="fea-card-stat">
                        <div className="stat-col-1">
                            <p>Followers</p>
                            <h4>3467</h4>
                        </div>
                        <div className="stat-col-2">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
                <div className="fea-card">
                    <div className="fea-card-image"></div>
                    <div className="fea-card-text">
                        <img src={LargeCreatorImage} alt="creator_img"/>
                        <h4>Aditi Agarwal</h4>
                        <p>Illustrator 3D</p>
                    </div>
                    <div className="fea-card-stat">
                        <div className="stat-col-1">
                            <p>Followers</p>
                            <h4>3467</h4>
                        </div>
                        <div className="stat-col-2">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
                
            </div>    
            
        </div>
    )
}

export default featured
