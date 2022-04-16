import React from 'react'
import styled from "styled-components";
import device from "../../../utils/mediaUtils";
import Image from "next/image";
import NAPButton from "@components/NAPButton/index";
import Slider from "react-slick";

const DesignContainer = styled.div`
    background: #000;
    .virtual-assistant-wrapper {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        /* justify-content: center; */
        position: relative;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        ${device.laptopS} {
            flex-direction: column;
        }

    }
`

const DesignImgWrapper = styled.div`
    float: right;
    width: 65%;
    ${device.laptopS} {
        float: none;
        width: 100%;
    }

`


const DesignContentWrapper = styled.div`
    float: left;
    margin-right: 100px;
    @media (max-width: 1500px) {
        margin-right: 50px;
    }
    ${device.laptopM} {
        .main-heading + .sub-heading {
            margin-top: 10px;
        }
        .sub-heading + .btn-container {
            margin-top: 10px;
        }
    } 
    ${device.laptopS} {
        float: none;
        margin: 30px 0;
        text-align: center;
    }
`

function DesignServiceBanner({ desktopImg, mobileImg, DesignTitle, DesignDescription, DesignCTATitle, DesignURL }) {
    return (
        <DesignContainer>
            <div className='virtual-assistant'>
                <div className='virtual-assistant-wrapper'>
                    <DesignImgWrapper className='design-img-wrapper'>
                        <div className='showInDesktop'>
                            <Image
                                src={desktopImg}
                                width="1280"
                                height="475"
                                layout="responsive"
                                alt='NewAge Design Service'
                            />
                        </div>
                        {/*  */}
                        <div className='showInMobile'>
                            <Image
                                src={mobileImg}
                                width="375"
                                height="325"
                                layout="responsive"
                                alt='NewAge Design Service'
                            />
                        </div>
                    </DesignImgWrapper>

                    <DesignContentWrapper className='design-content-wrapper'>
                        <h3 className="main-heading fc-white DesignTitle">
                            {DesignTitle}
                        </h3>
                        <p className="sub-heading fc-white DesignDescription">
                            {DesignDescription}
                        </p>

                        <div className="btn-container">
                            <NAPButton
                                type="outlined"
                                text={DesignCTATitle}
                                url={DesignURL}
                                color='#FFF'

                            />
                        </div>
                    </DesignContentWrapper>
                </div>
            </div>

        </DesignContainer>
    )
}
export default DesignServiceBanner
