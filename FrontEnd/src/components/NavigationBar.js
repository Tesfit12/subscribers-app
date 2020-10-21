import React, { Fragment } from "react";
import '../App.css'
import styled from '@emotion/styled'
import { Navbar, Nav, FormControl, Button, Form, Badge, } from 'react-bootstrap'
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";



export default function NavigationBar() {

    const styleDivOuter = {
        width: '200px',
        height: '47px',
        backgroundColor: 'white',
        border: '2.6px solid rgb(17, 84, 169)',
        borderRadius: '30px',
        // position: 'absolute',
    }

    const styleDivInner = {
        width: '189.2px',
        height: '37px',
        backgroundColor: '#0073b1',
        borderRadius: '30px',
        position: 'relative',
        top: '2.9px',
        left: '2.9px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white'
    }


    return (
        <Navbar sticky="top" variant="dark" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'rgb(206, 222, 247)' }}>


            {/*  ============> DASHBOARD <================= */}



            {/*  ============> CAMPAGNE <================= */}

            <div style={styleDivOuter}>
                <a href="/WelcomePage">
                    <div style={styleDivInner}>
                        <AiOutlineDoubleRight size={25} />
                        <span>CAMPAGNE</span>
                        <GiSpeedometer size={26} />
                    </div>
                </a>
            </div>
            {/*  ============> TEMPLATES <================= */}



            <div style={styleDivOuter}>
                <a href="/TemplatePage">
                    <div style={styleDivInner}>
                        <AiOutlineDoubleRight size={25} />
                        <span>TEMPLATES</span>
                        <BsFileEarmarkText size={26} />

                    </div>
                </a>
            </div>
            {/*  ============> COMPTE <================= */}

            <div style={styleDivOuter}>
                <a href="/ComptePage">
                    <div style={styleDivInner}>
                        <AiOutlineDoubleRight size={25} className='BadgeIcon' />
                        <span>COMPTE</span>
                        <FaRegUserCircle size={26} className='BadgeIconRight' />

                    </div>
                </a>
            </div>




        </Navbar>

    )
}








{/*  ============> DASHBOARD <================= */ }
{/* <Badge pill className='BadgeQizBorder'>
                <a href="/DashboardPage">
                    <Badge pill className='BadgeQizInside'>
                        <span>
                            <AiOutlineDoubleRight size={25} className='BadgeIcon' />
                        </span>
                        <span>DASHBOARD</span>
                        <span>
                            <IoIosRocket size={26} className='BadgeIconRight' />
                        </span>
                    </Badge>
                </a>
            </Badge> */}


{/*  ============> CAMPAGNE <================= */ }
{/* <Badge pill className='BadgeQizBorder'>
                <a href="/WelcomePage">
                    <Badge pill className='BadgeQizInside'>
                        <span>
                            <AiOutlineDoubleRight size={25} className='BadgeIcon' />
                        </span>
                        <span>CAMPAGNE</span>
                        <span>
                            <GiSpeedometer size={26} className='BadgeIconRight' />
                        </span>
                    </Badge>
                </a>
            </Badge> */}



{/*  ============> TEMPLATES <================= */ }
{/* <Badge pill className='BadgeQizBorder'>
                <a href="/TemplatePage">
                    <Badge pill className='BadgeQizInside'>
                        <span>
                            <AiOutlineDoubleRight size={25} className='BadgeIcon' />
                        </span>
                        <span>TEMPLATES</span>
                        <span>
                            <BsFileEarmarkText size={26} className='BadgeIconRight' />
                        </span>
                    </Badge>
                </a>
            </Badge> */}


{/*  ============> COMPTE <================= */ }
{/* <Badge pill className='BadgeQizBorder'>
                <a href="/ComptePage">
                    <Badge pill className='BadgeQizInside'>
                        <span>
                            <AiOutlineDoubleRight size={25} className='BadgeIcon' />
                        </span>
                        <span>COMPTE</span>
                        <span>
                            <FaRegUserCircle size={26} className='BadgeIconRight' />
                        </span>
                    </Badge>
                </a>
            </Badge> */}
