import style from './Hader.module.scss'
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";

const Header = () => {
    return (
        <header className={style.headerSection}>
            <div className={style.headerSectionShadow}>
                <div className={style.headerUpperBlock}>
                    <Image src={imageObject.siteLogo} alt="sitelogo not found"/>
                    <button>Book A Consultation</button>
                </div>
                <nav className={style.navBarBlock}>
                    <div className={style.linksHeader}>
                        <h3>Home</h3>
                        <h3>About Us</h3>
                        <h3>Pages</h3>
                        <h3>Contact Us</h3>
                    </div>
                    <div className={style.headerContactInfo}>
                        <Image src={imageObject.callImage} alt="callimg not found"/>
                        <div className={style.connectInfo}>
                            <h5>Call Us On:</h5>
                            <h6>911-987654321</h6>
                        </div>
                        <Image
                            src={imageObject.messageFrame}
                            alt="messageimg not found"
                        />
                        <div className={style.connectInfo}>
                            <h5>Email Us On:</h5>
                            <h6>yourmail@mail.com</h6>
                        </div>
                    </div>
                </nav>
                <div className={style.headerInfo}>
                    <div className={style.headerDescription}>
                        <Image src={imageObject.linesLeft} alt="mini logo not found"/>
                        <h5>We`re Group Of Certified Law Professionals</h5>
                        <h3>
                            we have helped countless maritime workers and their families go
                            up against the largest offshore companies and win.
                        </h3>
                        <button>Get In Touch</button>
                    </div>
                    <div className={style.headerPerson}>
                        <Image src={imageObject.person} alt="person not found"/>
                    </div>
                </div>
            </div>
        </header>
)
}

export default Header;