import React, { Component } from "react";
import '../styles/generatedcv.css';

class GeneratedCV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const testData = [];

        for (let k in this.props.info) {
            testData.push(<div>{k + ' is ' + this.props.info[k]}</div>);
        }

        return (
            <div className="generated-cv">
                <div className="side-bar">
                    <div className="contact-section">
                        <div className="contact-section-title section-title">Contact</div>
                        <hr className="contact-line"></hr>
                        <div className="contact-bundle">
                            <div className="contact-title">Phone</div>
                            <div className="contact-info">{this.props.info['phone-number']}</div>
                        </div>
                        <div className="contact-bundle">
                            <div className="contact-title">Email</div>
                            <div className="contact-info">{this.props.info['email']}</div>
                        </div>
                        <div className="contact-bundle">
                            <div className="contact-title">Address</div>
                            <div className="contact-info">{this.props.info['address']}</div>
                        </div>
                    </div>
                </div>
                <div className="main-contents">
                    <div className="title-holder">
                        <div className={"name-text"}> 
                            {this.props.info['first-name'] + ' ' + this.props.info['last-name']}
                        </div>
                        <div className="title-text">
                            {this.props.info['title']}
                        </div>
                    </div>
                    <div className="experience-section">
                        <div className="experience-section-title section-title">Current Work</div>
                        <hr className="main-line"></hr>
                        <div className="date item">{this.props.info['work-start'] + ' - ' + this.props.info['work-end']}</div>
                        <div className="experience-title item"> {this.props.info['position']}</div>
                        <div className="experience-company item">{this.props.info['company']}</div>
                    </div>
                    <div className="education-section">
                        <div className="education-section-title section-title">Education</div>
                        <hr className="main-line"></hr>
                        <div className="date item">{this.props.info['school-start'] + ' - ' + this.props.info['school-end']}</div>
                        <div className="degree-name item">{this.props.info['degree']}</div>
                        <div className="university-name item">{this.props.info['university']}</div>
                        <div className="university-location item">{this.props.info['city'] + ', ' + this.props.info['state']}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneratedCV;