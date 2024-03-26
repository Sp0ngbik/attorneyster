import style from "./History.module.scss";
import React from "react";
import {imageObject} from "@/page/utils/imageObject";
import Image from "next/image";

const History = () => {
    return (
        <div className={style.historyContent}>
            <div className={style.historyDecription}>
                <h2>
                    We Are Top Lawyers <br/> And History
                </h2>
                <Image src={imageObject.linesLeft} alt={"logo left history not found"}/>
                <div
                >
                    <h5>2000 – Establishment of the Company!</h5>
                    <h6>
                        The origins of lawyers and the first founders of law make
                        their appearance in Ancient Greece and Rome.
                    </h6>
                    <h5>2006 – Together we Build</h5>
                    <h6>
                        Lawyers in medieval times found themselves struggling to make
                        a living as the legal profession collapsed in the western
                        world.
                    </h6>
                    <h5>2008 – Completed 10000 cases</h5>
                    <h6>
                        When did lawyers first start practicing in the United States?
                        It’s important to understand that the history of attorneys.
                    </h6>
                    <h5>2011 – We are Number One</h5>
                    <h6>
                        Eventually, the prejudices against lawyers started to fall
                        away and the legal profession began to gain respect and power.
                    </h6>
                </div>
            </div>
            <div className={style.historyImage}>
                <Image src={imageObject.historyJudge} alt="judge not found"/>
            </div>
            <div className={style.historyStats}>
                <h2>
                    We Are Specialised
                    <br/> And Experienced
                </h2>
                <Image
                    src={imageObject.linesLeft}
                    alt="mini logo right history not found"
                />
                <div className={style.historyStatsContent}>
                    <h5>
                        Keep yourself up-to-date on your area of law. Be aware of new
                        developments, as laws and rules often change based on the
                        situation and new cases are being decided every day.
                    </h5>
                    <div className={style.historyCases}>
                        <div className={style.divorceCase}>
                            <div>Divorce And Family Cases</div>
                            <span>75%</span>
                        </div>
                        <div className={style.propertyCase}>
                            <div>Property And Construction</div>
                            <span>80%</span>
                        </div>
                        <div className={style.bankingCases}>
                            <div>Banking And Finance</div>
                            <span>75%</span>
                        </div>
                        <div className={style.accidentCases}>
                            <div>Accident and Wrongful Death</div>
                            <span>90%</span>
                        </div>
                    </div>
                        <button>Free Consulting</button>
                </div>
            </div>
        </div>
    );
};

export default History;