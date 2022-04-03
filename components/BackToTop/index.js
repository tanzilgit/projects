import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTopParent = styled.div`
`
const ScrollToTop = styled.div`
    position: fixed;
    bottom: 130px;
    right: 0.5rem;
    cursor: pointer;
    z-index: 10;
    
    span {
        background: #404040;
        color: #fff;
        font-size: .6875rem;
        padding: 9px 15px;
        position: relative;
        cursor: pointer;
        opacity: 0.7;
        letter-spacing: 1px;

        :hover {
            opacity: 1;
        }
        :before {
            position: absolute;
            top: -20px;
            left: 0;
            right: 0;
            width: 17px;
            margin: 0 auto;
            content: '\f0d8';
            font-family: FontAwesome;
            font-size: 30px;
            color: #404040;
        }
    }

`

function BackToTop() {

    const [isVisible, setIsVisible] = useState(false);

    // Show Scroll Button when reached specific distance from top
    // Like below button will show when page is scrolled 500px from top

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Adding position where to scroll-to and its behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <ScrollToTopParent>

            <ScrollToTop className="scroll-to-top">
                {isVisible && (
                    <span onClick={scrollToTop}>TOP</span>
                )}
            </ScrollToTop>
        </ScrollToTopParent>
    );
}

export default BackToTop;
