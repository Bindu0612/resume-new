import React, { Component } from 'react';
import './ResumeNew.css';
import { profile } from './Config';

class ResumeNew extends Component {

    render() {
        const item = profile[0];
        return (
            <div className="container">
                <div >
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5  profile">
                            < img src={require('./woman.png')}
                                alt="Avatar" />
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 nameStyle">
                            {item.personalBD[0].firstName &&
                                <div  >
                                    <span>  {item.personalBD[0].firstName} </span>
                                </div>
                            }

                            <div className="roleStyle">
                                {item.personalBD[0].occupation &&
                                    <div>
                                        <span > {item.personalBD[0].occupation} </span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-5 col-lg-5 col-sm-12">

                            {item.personalBD[0].Intro &&
                                <div>
                                    <span className="keyStyle"> PROFILE:  </span> <br />
                                    <span className="descStyle">  {item.personalBD[0].Intro} </span>
                                </div>
                            }

                            {item.personalBD[0].phone &&
                                <div>
                                    <span className="keyStyle"> PHONE:  </span> <br />
                                    <span className="descStyle" > {item.personalBD[0].phone} </span>
                                </div>
                            }

                            {item.personalBD[0].website &&
                                <div>
                                    <span className="keyStyle"> WEBSITE:  </span> <br />
                                    <span className="descStyle"> {item.personalBD[0].website} </span>
                                </div>
                            }

                            {item.personalBD[0].email &&
                                <div>
                                    <span className="keyStyle"> EMAIL:  </span> <br />
                                    <span className="descStyle"> {item.personalBD[0].email} </span>
                                </div>
                            }

                            {item.hobbies &&
                                <div>
                                    <span className="keyStyle"> HOBBIES:  </span> <br />
                                    <span className="descStyle"> {item.hobbies} </span>
                                </div>
                            }
                        </div>

                        <div className="col-md-7 col-lg-7 col-sm-12">

                            {item.education[0] &&
                                <div>
                                    <span className="keyStyle1 border-bottom border-primary">EDUCATION</span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> [ID]:</span> <br />
                                    <span className="descStyle"> {item.education[0].id} </span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> NAME:</span> <br />
                                    <span className="descStyle"> {item.education[0].name} </span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> YEAR:</span> <br />
                                    <span className="descStyle"> {item.education[0].year} </span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> SPECIALITY:</span> <br />
                                    <span className="descStyle"> {item.education[0].speciality} </span> <br />
                                </div>
                            }

                            {item.education[1] &&
                                <div>
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> [ID]:</span> <br />
                                    <span className="descStyle"> {item.education[1].id} </span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> NAME:</span> <br />
                                    <span className="descStyle"> {item.education[1].name} </span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> YEAR:</span> <br />
                                    <span className="descStyle"> {item.education[1].year} </span> <br />
                                    <span style={{ "font-weight": "bold", "display": "inline-block", "fontSize": "small" }}> SPECIALITY:</span> <br />
                                    <span className="descStyle"> {item.education[1].speciality} </span> <br />
                                </div>
                            }

                            {item.experience &&
                                <div>
                                    <span className="keyStyle1 border-bottom border-primary"> EXPERIENCE:</span> <br />
                                    <span className="descStyle"> {item.experience} </span>
                                </div>
                            }

                            {item.skills &&
                                <div>
                                    <span className="keyStyle1 border-bottom border-primary"> SKILLS:</span> <br />
                                    <span className="descStyle"> {item.skills[0]} </span><br />
                                    <span className="descStyle"> {item.skills[1]} </span><br />
                                    <span className="descStyle"> {item.skills[2]} </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeNew;