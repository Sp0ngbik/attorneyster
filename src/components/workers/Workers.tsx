import React from 'react';
import style from "./Workers.module.scss";
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";

const Workers = () => {
    return (
        <div className={style.workersBlock}>
            <h3>
                Our Experienced Attorney Are Ready
                <br/>
                To Answer Any Questions
            </h3>
            <Image src={imageObject.linesCenter} alt="width logo not found"/>
            <div className={style.workersContent}>
                <div>
                    <div className={style.workerWrapper}>
                        <Image src={imageObject.worker1} alt="worker 1 not found"/>
                        <div className={style.workersContactsWrapper}>
                            <Image
                                src={imageObject.facebookLogo}
                                alt="facebook logo not found"
                            />
                            <Image
                                src={imageObject.twitterLogo}
                                alt="twitterLogo logo not found"
                            />
                            <Image
                                src={imageObject.instagramLogo}
                                alt="instagramLogo logo not found"
                            />
                            <Image
                                src={imageObject.pinterestLogo}
                                alt="pinterestLogo logo not found"
                            />
                        </div>
                    </div>
                    <h4>John Turner</h4>
                    <p>Civil Attorney</p>
                </div>
                <div>
                    <div className={style.workerWrapper}>
                        <Image src={imageObject.worker2} alt="worker 2 not found"/>
                        <div className={style.workersContactsWrapper}>
                            <Image
                                src={imageObject.facebookLogo}
                                alt="facebook logo not found"
                            />
                            <Image
                                src={imageObject.twitterLogo}
                                alt="twitterLogo logo not found"
                            />
                            <Image
                                src={imageObject.instagramLogo}
                                alt="instagramLogo logo not found"
                            />
                            <Image
                                src={imageObject.pinterestLogo}
                                alt="pinterestLogo logo not found"
                            />
                        </div>
                    </div>
                    <h4>Martha Black</h4>
                    <p>Associate Attorney</p>
                </div>
                <div>
                    <div className={style.workerWrapper}>
                        <Image src={imageObject.worker3} alt="worker 3 not found"/>
                        <div className={style.workersContactsWrapper}>
                            <Image
                                src={imageObject.facebookLogo}
                                alt="facebook logo not found"
                            />
                            <Image
                                src={imageObject.twitterLogo}
                                alt="twitterLogo logo not found"
                            />
                            <Image
                                src={imageObject.instagramLogo}
                                alt="instagramLogo logo not found"
                            />
                            <Image
                                src={imageObject.pinterestLogo}
                                alt="pinterestLogo logo not found"
                            />
                        </div>
                    </div>
                    <h4>Brian Gomez</h4>
                    <p>Titular Attorney</p>
                </div>
            </div>
        </div>
    );
};

export default Workers;