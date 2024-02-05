import React from 'react'
import './stakeneuro.css'
import graysvg from './graysvg.svg'
import greensvg from './greensvg.svg'

export default function StakeNeuro() {
    return (
        <div className="stake_main_container">
            <div className='stakeneuro_container'>
                <p className='stake_topic'>Stake NEURO to capture DePIN exposure</p>
                <div className="three_content_stake">
                    <div className="sub_two_content">
                        <p className='sub_two_contet_text'>AI Coin holders</p>
                        <div className='two_content'>


                            <div className="gray_svg_1">
                                <p>Stake their AI coins by delegating to preferred providers</p>
                                <img src={graysvg} alt="" />
                            </div>
                            <div className="two_arrow_row">
                                <div className='two_arrow'>


                                    <svg width="301" height="27" viewBox="0 0 301 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M284 13H1.99997" stroke="url(#paint0_linear_2238_350)" stroke-width="3" stroke-linecap="round" />
                                        <path d="M299.962 12.6288C300.479 13.0285 300.48 13.8086 299.964 14.2096L285.298 25.6059C284.641 26.1159 283.685 25.6488 283.684 24.8175L283.655 2.06216C283.654 1.23081 284.609 0.761267 285.267 1.26969L299.962 12.6288Z" fill="#838DE2" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2238_350" x1="-22.2954" y1="11.8941" x2="288.442" y2="11.3003" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.125" stop-color="#858FE5" stop-opacity="0" />
                                                <stop offset="1" stop-color="#858FE5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg width="301" height="27" viewBox="0 0 301 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.0001 13H299" stroke="url(#paint0_linear_2240_375)" stroke-width="3" stroke-linecap="round" />
                                        <path d="M1.03797 12.6288C0.52089 13.0285 0.519901 13.8086 1.03597 14.2096L15.7024 25.6059C16.3589 26.1159 17.3149 25.6488 17.316 24.8175L17.3449 2.06216C17.346 1.23081 16.3911 0.761267 15.7333 1.26969L1.03797 12.6288Z" fill="#838DE2" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2240_375" x1="323.295" y1="11.8941" x2="12.5583" y2="11.3003" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.125" stop-color="#858FE5" stop-opacity="0" />
                                                <stop offset="1" stop-color="#858FE5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="gray_svg_1">
                                <img src={graysvg} alt="" />
                                <p>Get Neuro rewards + AI Coins APRs</p>
                            </div>
                        </div>

                    </div>
                    <div className="sub_three_hex_content">
                        <div className="neuro_holder_hex_content">
                            <p>NEURO holders</p>
                            <div style={{ display: "flex", gap: "20px" }}>


                                <div className="gray_svg_2">
                                    <img src={graysvg} alt="" />
                                    <p>Delegate NEURO to reliable nodes</p>
                                </div>
                                <div className="two_arrow_column">

                                    <div className="arrow_vertical">


                                        <svg width="27" height="188" viewBox="0 0 27 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 171L14 2" stroke="url(#paint0_linear_2239_364)" stroke-width="3" stroke-linecap="round" />
                                            <path d="M14.2289 186.962C13.8292 187.479 13.049 187.48 12.648 186.964L1.25181 172.298C0.741724 171.641 1.20884 170.685 2.04018 170.684L24.7955 170.655C25.6269 170.654 26.0964 171.609 25.588 172.267L14.2289 186.962Z" fill="#838DE2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2239_364" x1="12.8941" y1="-12.56" x2="12.6808" y2="173.662" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.125" stop-color="#858FE5" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#858FE5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>


                                        <svg width="27" height="188" viewBox="0 0 27 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 17L14 186" stroke="url(#paint0_linear_2239_367)" stroke-width="3" stroke-linecap="round" />
                                            <path d="M14.2289 1.03803C13.8292 0.520952 13.049 0.519963 12.648 1.03603L1.25181 15.7025C0.741726 16.359 1.20884 17.315 2.04019 17.3161L24.7955 17.345C25.6269 17.346 26.0964 16.3911 25.588 15.7334L14.2289 1.03803Z" fill="#838DE2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_2239_367" x1="15.1059" y1="200.56" x2="15.3192" y2="14.3377" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.125" stop-color="#858FE5" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#858FE5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>


                                </div>
                                <div className="gray_svg_2">
                                    <img src={graysvg} alt="" />
                                    <p>Get a share of commissions</p>
                                </div>
                            </div>
                        </div>
                        <div className="hex">

                            <div className="two_hex">


                                <div class="hexagon2">

                                    <p>Infra provider</p>
                                </div>
                                <div class="hexagon2">

                                    <p>Infra provider</p>
                                </div>
                                
                            </div>
                           

                            <div className="one_hex">
                                <div class="hexagon2">

                                    <p>Infra provider</p>
                                </div>
                            </div>
                        </div>
                        <div className="gray_svg_3">
                            <img src={graysvg} alt="" />
                            <p>Stake NEURO: required to have a min balance of 32 NEURO for inclusion</p>
                        </div>


                    </div>
                    <div className="sub_three_content">
                        <div className="gray_svg_sub_three_content">
                            <img src={graysvg} alt="" />
                            <p>Staking rewards from AI protocols</p>
                        </div>
                        <div className="svg-container">

                            <svg width="301" height="27" viewBox="0 0 301 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0001 13H299" stroke="url(#paint0_linear_2240_375)" stroke-width="3" stroke-linecap="round" />
                                <path d="M1.03797 12.6288C0.52089 13.0285 0.519901 13.8086 1.03597 14.2096L15.7024 25.6059C16.3589 26.1159 17.3149 25.6488 17.316 24.8175L17.3449 2.06216C17.346 1.23081 16.3911 0.761267 15.7333 1.26969L1.03797 12.6288Z" fill="#838DE2" />
                                <defs>
                                    <linearGradient id="paint0_linear_2240_375" x1="323.295" y1="11.8941" x2="12.5583" y2="11.3003" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.125" stop-color="#858FE5" stop-opacity="0" />
                                        <stop offset="1" stop-color="#858FE5" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                        <div className="gray_svg_sub_three_content">
                            <img src={graysvg} alt="" />
                            <p>NEURO Emissions</p>
                        </div>
                        <div style={{ paddingRight: "96px" }} className="gray_svg_sub_three_content">
                            <img src={graysvg} alt="" />
                            <p>Commissions in NEURO & coins</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
