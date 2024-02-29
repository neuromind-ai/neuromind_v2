import React from 'react'
import './depin.css'
import tablegreen from './tablegreen.svg'
import tablegray from './tablegray.svg'


export default function Depin() {
    return (
        <>

            <div className='depin_main_container'>
                {/* <Sidebar /> */}
                <div className="depin_container">
                    <div className="three_content">
                        <div className='ai_tokens'>

                      
                        <div className="content_1">
                            <div className="sub_content_1">
                                {/* <div className="ai_token"> */}

                                <div className="svg_container_1">
                                    <div className="svg_1">

                                        <p>TAO</p>
                                    </div>
                                    <div className="svg_1">

                                        <p>LPT</p>
                                    </div>
                                    <div className="svg_1">

                                        <p>GRASS</p>
                                    </div>
                                    <div className="svg_1">

                                        <p>MOBILE</p>
                                    </div>

                                </div>
                                {/* <p>Ai Token</p> */}
                                {/* </div> */}
                                <div className="svg_container_2">
                                    <div className="svg_1">

                                        <p>RNDR</p>
                                    </div>
                                    <div className="svg_1">

                                        <p>MOR</p>
                                    </div>
                                    <div className="svg_1">

                                        <p>POND</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <span>AI Tokens </span> 
                        </div>
                        <div className="svg-container-1">

                            <svg width="60" height="23" viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.9623 12.2941C59.4853 11.8939 59.4853 11.1061 58.9623 10.7059L45.2744 0.230422C44.6165 -0.273118 43.6667 0.196018 43.6667 1.02455V6.40234C43.6667 6.92693 43.2613 7.36234 42.738 7.39979L1.03901 10.384C0.453562 10.4259 0 10.9131 0 11.5C0 12.0869 0.453559 12.5741 1.03901 12.616L42.7381 15.6002C43.2613 15.6377 43.6667 16.0731 43.6667 16.5977V21.9755C43.6667 22.804 44.6165 23.2731 45.2744 22.7696L58.9623 12.2941Z" fill="url(#paint0_linear_242_565)" />
                                <defs>
                                    <linearGradient id="paint0_linear_242_565" x1="60" y1="12" x2="7" y2="12" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#858FE5" />
                                        <stop offset="1" stop-color="#858FE5" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className='user_friendly'>

                       
                        <div className="content_2">

                            <div className="table_content">
                                <div className="home_three_dot">
                                    <div className="three_dot">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9.5" fill="#858FE5" fill-opacity="0.29" stroke="#817CC9" />
                                        </svg>

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9.5" fill="#D9D9D9" fill-opacity="0.2" stroke="#B5B7C9" />
                                        </svg>

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9.5" fill="#0ACF83" fill-opacity="0.3" stroke="#0ACF83" />
                                        </svg>

                                    </div>
                                    <div className="home">

                                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="9.5238" width="22.619" height="7.73809" fill="#B5B7C9" />
                                            <rect y="12.5" width="8.92857" height="12.5" fill="#B5B7C9" />
                                            <rect x="13.6905" y="12.5" width="8.92857" height="12.5" fill="#B5B7C9" />
                                            <path d="M19.8791 8.52381H2.73997L11.3095 1.30734L19.8791 8.52381Z" fill="#B5B7C9" stroke="#B5B7C9" stroke-width="2" />
                                        </svg>
                                    </div>


                                    <p className='table_topic'>Sigmoid Staking</p>
                                </div>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Project</th>
                                            <th>APR</th>
                                            <th>H/W req</th>
                                            <th>Socials </th>
                                            <th>Min stake</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Render</td>
                                            <td>**%</td>
                                            <td>32GB</td>
                                            <td>138k</td>
                                            <td>**RNDR</td>
                                        </tr>
                                        <tr>
                                            <td>Bittensor</td>
                                            <td>16.51%</td>
                                            <td>**GB</td>
                                            <td>58k</td>
                                            <td>**TAO</td>
                                        </tr>
                                        <tr>
                                            <td>Morpheus</td>
                                            <td>24%</td>
                                            <td>**GB</td>
                                            <td>45k</td>
                                            <td>** MOR</td>
                                        </tr>
                                        <tr>
                                            <td>Marlin</td>
                                            <td>10%</td>
                                            <td>1GB</td>
                                            <td>45k</td>
                                            <td>1m POND</td>
                                        </tr>
                                        <tr>
                                            <td>Livepeer</td>
                                            <td>**%</td>
                                            <td>**GB</td>
                                            <td>41.6k</td>
                                            <td>**lPT</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <span>User-Friendly Interface</span>
                        </div>
                        <div className="svg-container-1">

                            <svg width="60" height="23" viewBox="0 0 60 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.9623 12.2941C59.4853 11.8939 59.4853 11.1061 58.9623 10.7059L45.2744 0.230422C44.6165 -0.273118 43.6667 0.196018 43.6667 1.02455V6.40234C43.6667 6.92693 43.2613 7.36234 42.738 7.39979L1.03901 10.384C0.453562 10.4259 0 10.9131 0 11.5C0 12.0869 0.453559 12.5741 1.03901 12.616L42.7381 15.6002C43.2613 15.6377 43.6667 16.0731 43.6667 16.5977V21.9755C43.6667 22.804 44.6165 23.2731 45.2744 22.7696L58.9623 12.2941Z" fill="url(#paint0_linear_242_565)" />
                                <defs>
                                    <linearGradient id="paint0_linear_242_565" x1="60" y1="12" x2="7" y2="12" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#858FE5" />
                                        <stop offset="1" stop-color="#858FE5" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                      <div className='partner_validators'>

                     
                        <div className="content_3">
                            <div className="svg_container_1">
                                <div class="hexagon">

                                    <p>Figment</p>
                                </div>

                                <div class="hexagon">

                                    <p>P2p</p>
                                </div>


                            </div>
                            <div className="svg_container_2">
                                <div class="hexagon">

                                    <p>Chorus one</p>
                                </div>

                                <div class="hexagon">


                                    <p>Neuro DAO</p>
                                </div>

                            </div>
                        </div>
                        <span style={{paddingTop:"14px",whiteSpace:"nowrap"}}>Partner validators +NEURO DAO’s nodes</span>
                        </div>
                    </div>
                   
                </div>

            </div>

        </>
    )
}
