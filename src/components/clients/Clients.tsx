import style from './Clients.module.scss'
import Image from "next/image";
import {imageObject} from "@/page/utils/imageObject";
import React from "react";

const Clients = () => {
    return (
        <div className={style.clientReviews}>
            <div className={style.clientReviewTitle}>
                <h2>Client Opinions & Reviews</h2>
                <Image
                    src={imageObject.linesCenter}
                    alt="width logo on reviews  not found"
                />
            </div>
            <div className={style.reviewsExamples}>
                <div className={style.reviewReverse}>
                    <div className={style.reviewContent}>
                        <Image
                            src={imageObject.reviewsDotsLogo}
                            alt="reviewsDots1 not found"
                        />
                        <p>
                            Could you please thank Paul personally for me, the stars are
                            for his forehead. The perfect way of handling the case based
                            on the situation.
                        </p>
                    </div>
                    <div className={style.feedBackSender}>
                        <Image
                            src={imageObject.feedbackPerson1}
                            alt="feedback person 1 not found"
                        />
                        <div>
                            <p>Natasha</p>
                            <p>Private Employee</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.feedBackSenderInTop}>
                        <Image
                            src={imageObject.feedbackPerson2}
                            alt="feedback person 2 not found"
                        />
                        <div>
                            <p>Hannah Butler</p>
                            <p>Business Sector</p>
                        </div>
                    </div>
                    <div className={style.reviewContentInBottom}>
                        <Image
                            src={imageObject.reviewsDotsLogo}
                            alt="reviewsDots1 not found"
                        />
                        <p>
                            Attorney law firm really helped me with all my family law and
                            custody issues at the right time. Words are not enough to
                            thank the firm.
                        </p>
                    </div>
                </div>
                <div className={style.reviewReverse}>
                    <div className={style.reviewContent}>
                        <Image
                            src={imageObject.reviewsDotsLogo}
                            alt="reviewsDots1 not found"
                        />
                        <p>
                            Attorney law firm really helped me with all my family law and
                            custody issues at the right time. Words are not enough to
                            thank the firm.
                        </p>
                    </div>
                    <div className={style.feedBackSender}>
                        <Image
                            src={imageObject.feedbackPerson3}
                            alt="feedback person 3 not found"
                        />
                        <div>
                            <p>Phillip Arnold</p>
                            <p>Bus Driver</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.feedBackSenderInTop}>
                        <Image
                            src={imageObject.feedbackPerson4}
                            alt="feedback person 4 not found"
                        />
                        <div>
                            <p>Joshua Warren</p>
                            <p>Private Engineer</p>
                        </div>
                    </div>
                    <div className={style.reviewContentInBottom}>
                        <Image
                            src={imageObject.reviewsDotsLogo}
                            alt="reviewsDots1 not found"
                        />
                        <p>
                            I frequently check the Best Lawyers list to select an attorney
                            in areas too familiar with at the end they came and lead to
                            archive the justice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;