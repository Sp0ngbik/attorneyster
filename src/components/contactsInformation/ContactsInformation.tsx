import style from './ContactsInformation.module.scss'
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";

const ContactsInformation = () => {
    return (
        <div className={style.contactInformationWrapper}>
            <div className={style.contactDescription}>
                <h2>
                    Our Professional Expert Law
                    <br/> Team Is Always Ready To Serve <br/>
                    You
                </h2>
                <Image
                    src={imageObject.linesLeft}
                    alt="mini logo contant info not found"
                />
                <p>
                    We’re always available for new cases big or small. Send us an
                    email and we’ll get in touch shortly, or phone between 8:00 am and
                    7:00 pm Monday to Saturday.
                </p>
                <button>Contact Us</button>
            </div>
            <div className={style.consultationInfo}>
                <div>
                    <h3>Get a Free Consultation</h3>
                    <p>
                        You can get free consultation and case evaluation from us via
                        the following contact number
                    </p>
                    <div className={style.callContacts}>
                        <button>
                            <Image
                                src={imageObject.phoneIco}
                                alt="phoneIco not found"
                            />
                        </button>
                        <p>
                            Call Us On: <br/>
                            <span>911-987654321</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsInformation;