import React, { Component } from 'react';
import './ResumeNew.css';
import { profile } from './Config';

class Resume extends Component {

render() {
return (
<div className="container">
    <div>
        <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-5  profile">
                < img src={require('./woman.png')}
                    alt="Avatar" />
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7 nameStyle">
                <ul>
                    {profile.map(item => {
                        return (
                            <React.Fragment>
                                {item && item.personalBD && item.personalBD.firstName &&
                                    <div  >
                                        <span>  {item.personalBD.firstName} </span>
                                    </div>
                                }

                                {item && item.personalBD && item.personalBD.occupation &&
                                    <div className="roleStyle">
                                        <div>
                                            <span > {item.personalBD.occupation} </span>
                                        </div>
                                    </div>
                                }
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>

            <div>
                <div className="col-md-5 col-lg-5 col-sm-12">
                    <ul>
                        {profile.map(item => {
                            return (
                                <React.Fragment>
                                    {item && item.personalBD && item.personalBD.Intro &&
                                        <div  >
                                            <li>
                                                <span className="keyStyle"> PROFILE </span>
                                            </li>
                                            <li>
                                                <span className = "descStyle">  {item.personalBD.Intro} </span>
                                            </li>
                                        </div>
                                    }

                                    {item && item.personalBD && item.personalBD.phone &&
                                        <div>
                                            <li>
                                                <span className="keyStyle"> CONTACT </span>
                                            </li>
                                            <li>
                                                <span> {item.personalBD.phone} </span>
                                            </li>
                                        </div>
                                    }

                                    {item && item.personalBD && item.personalBD.website &&
                                        <div>
                                            <li>
                                                <span className="keyStyle"> WEBSITE </span>
                                            </li>
                                            <li>
                                                <span> {item.personalBD.website} </span>
                                            </li>
                                        </div>
                                    }

                                    {item && item.personalBD && item.personalBD.email &&
                                        <div>
                                            <li>
                                                <span className="keyStyle"> EMAIL </span>
                                            </li>
                                            <li>
                                                <span> {item.personalBD.email} </span>
                                            </li>
                                        </div>
                                    }
                                    <li>
                                        <span> HOBBIES </span>
                                    </li>
                                    {item && item.hobbies && item.hobbies.length > 0 && item.hobbies.map(hobby => {
                                        return (
                                            <li>
                                                <span> {hobby} </span>
                                            </li>
                                        )
                                    })}
                                </React.Fragment>

                            )
                        })}
                    </ul>
                </div>

                <div className="col-md-7 col-lg-7 col-sm-12">
                    <ul>
                        {profile.map(item => {
                            console.log("item", item)
                            return (
                                <React.Fragment>
                                    <li> 
                                    <span className="keyStyle1 underline"> EDUCATION </span>
                                    </li>
                                    {item && item.education && item.education.length > 0 && item.education.map(edu => {
                                        return (
                                            <li className="listStyle">
                                                <span className = "shortHeads">[ ID ] </span>
                                                <div> [{edu.id}] </div>
                                                <span className = "shortHeads">[ NAME] </span>
                                                <div> [{edu.name}] </div>
                                                <span className = "shortHeads">[ FROM - TO] </span>
                                                <div> [{edu.yearFrom}] [{edu.yearTo}] </div>                                                
                                                <span className = "shortHeads">[ SPECIALITY ] </span>                                                
                                                <div> [{edu.specialty}] </div>
                                            </li>
                                        )
                                    })}

                                    <li>
                                        <span className="keyStyle1"> EXPERIENCE </span>
                                    </li>

                                    <li>
                                        {item.experience}
                                    </li>
                                    
                                    <li>
                                        <li>
                                            <span className="keyStyle1"> SKILLS </span>
                                        </li>
                                        {item && item.skills && item.skills.length > 0 && item.skills.map(skill => {
                                            return (
                                                <li>
                                                    <span> {skill} </span>
                                                </li>
                                            )
                                        })}
                                    </li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
}

export default Resume;