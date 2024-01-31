import React from 'react'
import './team.css'
import profile from './profile.svg'
import alex from '../../../assets/alex.jpeg'
import mayank from '../../../assets/mayank.jpeg'
import rightonesvg from './rightonesvg.svg'
import companygreensvg from './companygreen.svg'
import companygreensvg2 from './companygreen2.svg'
import mayank1 from './mayanakcompanysvg/svg1.svg'
import mayank2 from './mayanakcompanysvg/svg2.svg'
import mayank3 from './mayanakcompanysvg/svg3.svg'
import mayank4 from './mayanakcompanysvg/svg4.svg'

import alex1 from './alexcompanysvg/svg1.svg'
import alex2 from './alexcompanysvg/svg2.svg'
import alex3 from './alexcompanysvg/svg3.svg'
import alex4 from './alexcompanysvg/svg4.svg'

import { FaLinkedin } from "react-icons/fa6";

export default function Team() {
    return (
        <div className='team_main_container'>
            <div className="sub_team_main_container">
                <p className='divider'>Innovators Behind Neuromind's Vision...</p>
                <div className="svg_and_text">
                    <p className='team_right_text'>   "Neuromind is on a mission to provide users with a comprehensive solution for navigating , staking and gaining valuable insights in the ever-expanding DePIN ecosystem..." </p>
                    <div className="two_svg_and_text_company">
                        <div className="profile_photo">
                            {/* <img src={profile} alt="" /> */}
                            <div className="img_photo">
                                <div className="img_1">
                                    <img src={mayank} alt="" />
                                    <div className="mayank_linkedin">

                                        <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/mayank-mahawar-46032a4b/' target='_blank'><FaLinkedin /><span style={{ color: "white" }}>Mayank</span></a>
                                    </div>
                                </div>
                                <div className="img_1">
                                    <img src={alex} alt="" />
                                    <div className="alex_linkedin">

                                        <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/alexsaplin/' target='_blank'><FaLinkedin /> <span style={{ color: "white" }}>Alex</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="two_profile_data">


                            <div className="mayank_svg_and_text_company_1">
                                <img className='mobile_view_image' src={mayank} alt="" />
                                <div className="all_company_img">
                                    <p>Graduated from IIT Kharagpur and Paris School of Economics, Mayank served as a policy consultant with the Ministry of Finance, Government of India. He led a 10- member founding team in data engineering at Tata Digital. Demonstrated innovation and strategic leadership as a Co- founder in entrepreneurial endeavors.</p>
                                    <div className="sub_all_company_img">

                                        <img src={mayank1} alt="" />
                                        <img src={mayank2} alt="" />
                                        <img src={mayank3} alt="" />
                                        <img src={mayank4} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="alex_svg_and_text_company_1">
                                <img className="mobile_view_image" src={alex} alt="" />
                                <div className="all_company_img">
                                    <p>Graduated in Computer Science and Blockchain Technologies from Moscow Institute of Physics and Technology, Alex is a Skilled smart contract engineer proficient in coding (Solidity, Python, Go), and former Co- founder at DeepMux. Merging robust academic foundations with a fervent passion for software engineering.</p>
                                    <div className="sub_all_company_img">

                                        <img src={alex1} alt="" />
                                        <img src={alex2} alt="" />
                                        <img src={alex3} alt="" />
                                        <img src={alex4} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}
