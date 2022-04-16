import React from 'react'
import styled from "styled-components";
import device from "../../../utils/mediaUtils";
import Image from "next/image";
import NAPButton from "@components/NAPButton/index";
import Slider from "react-slick";

const InstallationContainer = styled.div`
`
const InstallationImgWrapper = styled.div`
`
const InstallationContentWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    ${device.laptopM} {
        .main-heading + .sub-heading {
            margin-top: 10px;
        }
        .sub-heading + .btn-container {
            margin-top: 10px;
        }
    } 

    ${device.tablet} {
        .InstallationTitle {
            font-size: 28px;
            width: 300px;
            margin: 0 auto;
        }
        /*  */
        .InstallationDescription {
            font-size: 18px;
            width: 240px;
            margin: 15px auto 5px;
        }
  }

`


function InstallationBanner({ desktopImg, mobileImg, InstallationTitle, InstallationDescription, InstallationCTATitle, InstallationURL }) {
    return (
        <InstallationContainer>
            <div className='overlap-banner'>
                <InstallationImgWrapper className='installation-img-wrapper'>
                    <div className='showInDesktop'>
                        <Image
                            src={desktopImg}
                            width="1920"
                            height="270"
                            layout="responsive"
                            alt='NewAge Installation Service'
                        />
                    </div>
                    {/*  */}
                    <div className='showInMobile'>
                        <Image
                            src={mobileImg}
                            width="375"
                            height="415"
                            layout="responsive"
                            alt='NewAge Installation Service'
                        />
                    </div>
                </InstallationImgWrapper>
                <InstallationContentWrapper className='installation-content-wrapper'>
                    <h3 className="main-heading fc-white InstallationTitle">
                        {InstallationTitle}
                    </h3>
                    <p className="sub-heading fc-white InstallationDescription">
                        {InstallationDescription}
                    </p>

                    <div className="btn-container">
                        <NAPButton
                            type="link"
                            text={InstallationCTATitle}
                            url={InstallationURL}
                            color='#FFF'
                        />
                    </div>
                </InstallationContentWrapper>
            </div>
        </InstallationContainer>
    )
}
export default InstallationBanner