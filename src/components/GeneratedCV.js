import React from "react";
import '../styles/generatedcv.css';

const GeneratedCV = ({info}) => {

    return (
        <div className="generated-cv">
            <div className="side-bar">
                <div className="contact-section">
                    <div className="contact-section-title section-title">Contact</div>
                    <hr className="contact-line"></hr>
                    <div className="contact-bundle">
                        <div className="contact-title">Phone</div>
                        <div className="contact-info">{info['phone-number']}</div>
                    </div>
                    <div className="contact-bundle">
                        <div className="contact-title">Email</div>
                        <div className="contact-info">{info['email']}</div>
                    </div>
                    <div className="contact-bundle">
                        <div className="contact-title">Address</div>
                        <div className="contact-info">{info['address']}</div>
                    </div>
                </div>
            </div>
            <div className="main-contents">
                <div className="title-holder">
                    <div className={"name-text"}> 
                        {info['first-name'] + ' ' + info['last-name']}
                    </div>
                    <div className="title-text">
                        {info['title']}
                    </div>
                </div>
                <div className="experience-section">
                    <div className="experience-section-title section-title">Current Work</div>
                    <hr className="main-line"></hr>
                    <div className="date item">{info['work-start'] + ' - ' + info['work-end']}</div>
                    <div className="experience-title item"> {info['position']}</div>
                    <div className="experience-company item">{info['company']}</div>
                </div>
                <div className="education-section">
                    <div className="education-section-title section-title">Education</div>
                    <hr className="main-line"></hr>
                    <div className="date item">{info['school-start'] + ' - ' + info['school-end']}</div>
                    <div className="degree-name item">{info['degree']}</div>
                    <div className="university-name item">{info['university']}</div>
                    <div className="university-location item">{info['city'] + ', ' + info['state']}</div>
                </div>
            </div>
        </div>
    )
}

export default GeneratedCV;