import style from './Produce.module.scss'
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";
const Produce = () => {
    return (
        <section className={style.sectionProduce}>
            <div className={style.produceImageBlock}>
                <Image src={imageObject.mainFirst} alt="first not found"/>
                <Image src={imageObject.mainSec} alt="second Image not found"/>
            </div>
            <div className={style.produceDescription}>
                <h3>
                    Welcome to Attorney Law - <br/> Lawyer and Law Firm Company
                </h3>
                <Image
                    src={imageObject.linesLeft}
                    alt="linesLeft discr not found"
                />
                <p>
                    Although we are located in Brooklyn, our maritime lawyers are
                    proud to help the injured throughout the nation, including
                    workers who were working in foreign waters at the time of the
                    incident go up against the largest offshore companies and win.
                </p>
                <div className={style.person}>
                    <Image
                        src={imageObject.small_person}
                        alt="small person not found ;C"
                    />
                    <h2>Peter Parker</h2>
                </div>
                <div className={style.mainBlockButtons}>
                    <div className={style.successButton}>
                        <Image
                            src={imageObject.successCount}
                            alt="suсcess count not found"
                        />
                        <div>
                            <p>95%</p>
                            <p>Case success</p>
                        </div>
                    </div>
                    <div className={style.experienceButton}>
                        <Image
                            src={imageObject.experienceCount}
                            alt="exp count not found"
                        />
                        <div>
                            <p>Years</p>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Produce;