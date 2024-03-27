import style from "./News.module.scss";
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";

const News = () => {
    return (
        <div className={style.corporationLawsBlock}>
            <div className={style.corporationLawsContent}>
                <div>
                    <Image src={imageObject.law1} alt="law1 not found"/>
                    <div className={style.headerCorporateLaw}>
                        <span>Corporate Law</span>
                        <span>Friday, February 4,2022</span>
                    </div>
                    <div className={style.descriptionCorporateLaw}>
                        <h3>How to Tell Who Is at Fault in a Car Accident</h3>
                        <span>
                  Capitalize on low-hanging fruit to identify a ballpark value
                  added matrix economically activity to beta reviewReverse override the
                  digital.
                </span>
                        <a href="#">View more</a>
                    </div>
                </div>
                <div>
                    <Image src={imageObject.law2} alt="law2 not found"/>
                    <div className={style.headerCorporateLaw}>
                        <span>Legal Advice</span>
                        <span>Friday, February 4,2022</span>
                    </div>
                    <div className={style.descriptionCorporateLaw}>
                        <h3>When Sue Outside of Workers’ Compensation</h3>
                        <span>
                  Strategies on low-hanging fruit to identify a ballpark value
                  added activity matrix economically to beta reviewReverse override the
                  digital.
                </span>
                        <a href="#">View more</a>
                    </div>
                </div>
                <div>
                    <Image src={imageObject.law3} alt="law3 not found"/>
                    <div className={style.headerCorporateLaw}>
                        <span>Social Justice</span>
                        <span>Friday, February 4,2022</span>
                    </div>
                    <div className={style.descriptionCorporateLaw}>
                        <h3>Social Media Postings Lead to Defense Verdict</h3>
                        <span>
                  Collaborative on low-hanging fruit to identify a ballpark
                  value added activity to beta matrix economically reviewReverse override
                  the digital.
                </span>
                        <a href="#">View more</a>
                    </div>
                </div>
                <div>
                    <Image src={imageObject.law4} alt="law4 not found"/>
                    <div className={style.headerCorporateLaw}>
                        <span>Corporate Law</span>
                        <span>Friday, February 4,2022</span>
                    </div>
                    <div className={style.descriptionCorporateLaw}>
                        <h3>Riding solo to the rescue of her beloved nonprofits</h3>
                        <span>
                  Podcasting on low-hanging fruit to identify a ballpark value
                  added activity to beta reviewReverse override matrix economically the
                  digital.
                </span>
                        <a href="#">View more</a>
                    </div>
                </div>
                <div>
                    <Image src={imageObject.law5} alt="law5 not found"/>
                    <div className={style.headerCorporateLaw}>
                        <span>Legal Advice</span>
                        <span>Friday, February 4,2022</span>
                    </div>
                    <div className={style.descriptionCorporateLaw}>
                        <h3>Case Filed on Behalf of Injured Tugboat Worker</h3>
                        <span>
                  Efficiently on low-hanging fruit to identify a ballpark value
                  added activity to beta reviewReverse matrix economically override the
                  digital.
                </span>
                        <a href="#">View more</a>
                    </div>
                </div>
                <div>
                    <Image src={imageObject.law6} alt="law6 not found"/>
                    <div className={style.headerCorporateLaw}>
                        <span>Social Justice</span>
                        <span>Friday, February 4,2022</span>
                    </div>
                    <div className={style.descriptionCorporateLaw}>
                        <h3>How Companies Choose Legal Representation</h3>
                        <span>
                  Objectively on low-hanging fruit to identify a ballpark value
                  added activity to beta matrix economically reviewReverse override the
                  digital.
                </span>
                        <a href="#">View more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;