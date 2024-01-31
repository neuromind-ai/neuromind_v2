import React, { useState } from 'react'
import ContentWrapper from '../../component/contentwrapper/ContentWrapper'
import './home.css'
import { FaDiscord, FaInbox, FaSubscript, FaTwitter } from "react-icons/fa6";
import { BiLogoTelegram, BiMessage } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { motion } from 'framer-motion';
import data from './/thirdcontainer.json'
import Depin from './depin/Depin';
import Team from './team/Team'






const Home = () => {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telegram: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here, e.g., send data to a server
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
            name: '',
            email: '',
            telegram: '',
            notes: ''
        });
    };



    return (
        <>
            {/* // <ContentWrapper> */}


            <div className="first_part">
                <div className="first_part_hexagon">
                    <div className="align_center">

                        <div class="first_hexagon"></div>
                        <div className="first_two_hexagon">
                            <div class="first_hexagon"></div>
                            <div class="first_hexagon"></div>

                        </div>
                    </div>

                </div>
                <div className="first_part_text">
                    <span> Modular Orchestration,
                        <br />
                        Protocol For AI Networks</span>
                    <p>Empowering AI communities with decentralised staking infrastructure </p>
                    <a style={{ color: "inherit", textDecoration: "none" }} href="#request_demo"> <button style={{ cursor: "pointer" }}> request demo</button></a>
                </div>
            </div>

            <div className="second_container">
                <p className='second_container_text'>Let <span style={{ color: "#D2926E" }}> Neuromind</span>  guide you in spinning up nodes for AI Projects (DePIN)</p>
                <p className='depin_effort'>Effortlessly navigate risk-adjusted exposure to AI projects</p>
                <Depin />

            </div>
            <div className="Third_container">
                <div className="Third_content">
                    <div className="Third_headText">
                        How Neuromind can <span style={{ color: "#5BBEA6" }}>enhance</span>{" "}
                        {/* */}your <br />
                        your DePIN yield?
                    </div>
                </div>
                <div className="Third_card">
                    <ul>
                        {data.map((obj) => (
                            <li key={obj.id}>
                                {/* <p className='first_child'>{obj.name}</p>   */}
                                <p>{obj.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          
            <motion.div id="request_demo" className="home_contact_container"

            >
                <div className="contact_text">
                    <p>Ready To Get <br />Started?</p>
                </div>
                <div className="contact_form">
                    <form onSubmit={handleSubmit}>
                        <h2>Request Demo</h2>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" placeholder='Name' value={formData.email} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Telegram:
                            <input type="text" name="telegram" placeholder='Telegram' value={formData.telegram} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Notes:
                            <textarea name="notes" placeholder='Notes' value={formData.notes} onChange={handleChange} />
                        </label>
                        <br />
                        <div className="contact_button">

                            <button type="submit">Submit</button>
                        </div>
                    </form>


                </div>
            </motion.div>
            <div id="contact" className="social_media_container">
                <div className="social_account">
                    {/* Twitter */}
                    <a href="https://twitter.com/neuromind_ai" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>

                    {/* Discord */}
                    <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>


                    {/* Telegram */}
                    <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                        <BiLogoTelegram />
                    </a>


                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/mayank-mahawar-46032a4b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />

                    </a>

                </div>
                <div className="message_email">
                    <div className="message_text">
                        <p>Never miss an update <MdOutlineUnsubscribe /></p>
                        <p>Best way to stay connected with our progress.</p>
                    </div>
                    <div className="email_input">
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>

                </div>
            </div>
              <div>

                    <Team />
              </div>
         

            {/* <div className="company_product_container">
                <div className="neuromind">neuromind</div>
                <div className="developer_container">

                    <div className="company">
                        <p>company</p>
                        <ul>
                            <li> <a href="">About Us</a></li>
                            <li> <a href="">Contact Us</a></li>
                            <li> <a href="">Policies</a></li>
                        </ul>
                    </div>
                    <div className="company">
                        <p>product</p>
                        <ul>
                            <li> <a href="">How It Works?</a></li>
                            <li> <a href="">What Can You Build?</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="company">
                        <p>developers</p>
                        <ul>
                            <li> <a href="">Getting Started</a></li>
                            <li> <a href="">Support</a></li>

                        </ul>
                    </div>
                </div>

            </div> */}

            {/* </ContentWrapper > */}
        </>
    )
}

export default Home
