import React, { Component } from 'react';
import './App.css';
import { profile1 } from './profileData';

class Resume extends Component {

    render() {
        const item = profile1[0];
        return (
            <div className="container">
                <div >

                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5  profile">
                            < img src={require('./woman.png')}
                                alt="Avatar" />
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 nameStyle">
                            {item.name &&
                                <div  >
                                    <span> {item.name} </span>
                                </div>
                            }


                            <div className="roleStyle">
                                {item.role &&
                                    <div>
                                        <span > {item.role} </span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            {item.key1 &&
                                <div>
                                    <span className="keyStyle"> {item.key1} </span>
                                </div>
                            }

                            {item.description1 &&
                                <div className="descStyle">
                                    {item.description1}
                                </div>
                            }

                            {item.key2 &&
                                <div>
                                    <span className="keyStyle"> {item.key2} </span>
                                </div>
                            }

                            {item.description2 &&
                                <div className="descStyle">
                                    {item.description2}
                                </div>
                            }

                            {item.key3 &&
                                <div>
                                    <span className="keyStyle"> {item.key3} </span>
                                </div>
                            }

                            {item.description3 &&
                                <div className="descStyle">
                                    {item.description3}
                                </div>
                            }

                            {item.key4 &&
                                <div>
                                    <span className="keyStyle"> {item.key4} </span>
                                </div>
                            }

                            {item.description4 &&
                                <div className="descStyle">
                                    {item.description4}
                                </div>
                            }

                            {item.key5 &&
                                <div>
                                    <span className="keyStyle"> {item.key5} </span>
                                </div>
                            }

                            {item.description5 &&
                                <div className="descStyle">
                                    {item.description5}
                                </div>
                            }
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">

                            {item.key6 &&
                                <div>
                                    <span className="keyStyle1  border-bottom border-primary"> {item.key6} </span>
                                </div>
                            }

                            {item.description6 &&
                                <div className="descStyle">
                                    {item.description6}
                                </div>
                            }

                            {item.key7 &&
                                <div>
                                    <span className="keyStyle1 border-bottom border-primary"> {item.key7} </span>
                                </div>
                            }

                            {item.description7 &&
                                <div className="descStyle">
                                    {item.description7}
                                </div>
                            }

                            {item.key8 &&
                                <div>
                                    <span className="keyStyle1 border-bottom border-primary"> {item.key8} </span>
                                </div>
                            }

                            {item.description8 &&
                                <div className="descStyle">
                                    {item.description8}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;