import style from './Description.module.scss'
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";

const Description = () => {
    return (
        <section>
                <div className={style.mainDescription}>
                    <div className={style.descriptionTitle}>
                        <h2>
                            Explore The Perfect <br/> Out Practice Areas
                        </h2>
                        <Image
                            src={imageObject.linesLeft}
                            alt="mini logo on content not found"
                        />
                    </div>
                    <p>
                        We are a group of civil litigation/trial attorneys who focus on
                        providing a justice based on the issues relating to insurance
                        defense, insurance coverage, bad faith, insurance fraud and
                        criminal litigation.
                    </p>
                </div>
                <div className={style.descriptionText}>
                    <div>
                        <h2>Business Law</h2>
                        <p>
                            Be aware of new developments, as laws and rules often change
                            based on the situation.
                        </p>
                        <div className={style.blockButton}>
                            <Image
                                src={imageObject.selectSectionFirst}
                                alt="first discr logo not found"
                            />
                            <button>View More</button>
                        </div>
                    </div>
                    <div>
                        <h2>Construction Law</h2>
                        <p>
                            Never judge, just listen and advise. Even if your client has
                            made a bad decision in the case.
                        </p>
                        <div className={style.blockButton}>
                            <Image
                                src={imageObject.selectSectionSecond}
                                alt="sec discr logo not found"
                            />
                            <button>View More</button>
                        </div>
                    </div>
                    <div>
                        <h2>Car Accident</h2>
                        <p>
                            Being untruthful will get you nowhere and give you a reputation
                            of the dishonesty in law.
                        </p>
                        <div className={style.blockButton}>
                            <Image
                                src={imageObject.selectSectionThird}
                                alt="third discr logo not found"
                            />
                            <button>View More</button>
                        </div>
                    </div>
                    <div>
                        <h2>Wrongful Death</h2>
                        <p>
                            Keep yourself up-to-date on your area of law. Be aware of new
                            justice, as laws and rules.
                        </p>
                        <div className={style.blockButton}>
                            <Image
                                src={imageObject.selectSectionFourth}
                                alt="first discr logo not found"
                            />
                            <button>View More</button>
                        </div>
                    </div>
                    <div>
                        <h2>Criminal Law</h2>
                        <p>
                            Our attorneys are fully committed to providing you with the
                            support and attention that you deserve.
                        </p>
                        <div className={style.blockButton}>
                            <Image
                                src={imageObject.selectSectionFifth}
                                alt="first discr logo not found"
                            />
                            <button>View More</button>
                        </div>
                    </div>
                    <div>
                        <h2>Family Law</h2>
                        <p>
                            You may find yourself unable to work or complete work-related
                            responsibilities safely.
                        </p>
                        <div className={style.blockButton}>
                            <Image
                                src={imageObject.selectSectionSix}
                                alt="first discr logo not found"
                            />
                            <button>View More</button>
                        </div>
                    </div>
            </div>
        </section>
    )
        ;
};

export default Description;