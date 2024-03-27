import React from 'react';

import style from "./AttorneysterMain.module.scss";
import {imageObject} from "./utils/imageObject";
import Image from "next/image";
import Header from "@/layout/Header/Header";
import Produce from "@/components/produce/Produce";
import Description from "@/components/description/Description";
import History from "@/components/history/History";
import Clients from "@/components/clients/Clients";
import Workers from "@/components/workers/Workers";
import ContactsInformation from "@/components/contactsInformation/ContactsInformation";
import FormForContacts from "@/components/formForContacts/FormForContacts";

const AttorneysterMain = () => {
    return (
        <div>
            <Header/>
            <main>
                <div className={style.mainContent}>
                    <Produce/>
                    <Description/>
                </div>
                <div className={style.historyBlock}>
                    <History/>
                </div>
                <Clients/>
                <Workers/>
                <ContactsInformation/>
                <FormForContacts/>
                {/*<div className={style.formContant}>*/}
                {/*<Form*/}
                {/*    onFinish={(value) => {*/}
                {/*        const userObjInfo = {*/}
                {/*            name: value.userName,*/}
                {/*            email: value.email,*/}
                {/*            userPhone: value.userPhone,*/}
                {/*            subject: value.userMessageSubject,*/}
                {/*            message: value.userMessageText,*/}
                {/*        };*/}
                {/*        console.log(userObjInfo);*/}
                {/*    }}*/}
                {/*    className={style.inputBlockInfo}*/}
                {/*>*/}
                {/*    <Form.Item name="userName">*/}
                {/*        <input type="useername" placeholder="Full Name*"/>*/}
                {/*    </Form.Item>*/}
                {/*    <Form.Item name="email">*/}
                {/*        <input type="email" placeholder="Email Adress*"/>*/}
                {/*    </Form.Item>*/}
                {/*    <Form.Item name="userPhone">*/}
                {/*        <input type="tel" placeholder="Phone Number"/>*/}
                {/*    </Form.Item>*/}
                {/*    <Form.Item name="userMessageSubject">*/}
                {/*        <input type="message" placeholder="Subject"/>*/}
                {/*    </Form.Item>*/}
                {/*    <Form.Item className={style.textAreaItem} name="userMessageText">*/}
                {/*        <TextArea*/}
                {/*            name="userMessageText"*/}
                {/*            type="input.TextArea"*/}
                {/*            className={style.userMessage}*/}
                {/*            placeholder="Your Message"*/}
                {/*        />*/}
                {/*    </Form.Item>*/}
                {/*    <Button*/}
                {/*        className={style.subButtonUserInfo}*/}
                {/*        htmlType="submit"*/}
                {/*        // type="submit"*/}
                {/*    >*/}
                {/*        Get An Appointment*/}
                {/*    </Button>*/}
                {/*</Form>*/}
                {/*</div>*/}
                <div className={style.recentBlogs}>
                    <div className={style.recentBlogHeader}>
                        <h2>Recent Blogs</h2>
                        <Image
                            src={imageObject.linesCenter}
                            alt="width logo on recent blog - not found"
                        />
                    </div>
                    <div className={style.recentBlogContent}>
                        <Image
                            src={imageObject.recentBlogImg}
                            alt="recent blog Image not found"
                        />
                        <div className={style.recentBlockRight}>
                            <div className={style.recentBlogRightHeader}>
                                <span>Corporate Law</span>
                                <span className={style.dateSeparator}>|</span>
                                <span>Friday February 4, 2022</span>
                            </div>
                            <h3>
                                The Difference between <br/> Information & Legal Advice
                            </h3>
                            <span>
                Collaborative on low-hanging fruit to identify a ballpark value
                added
                <br/> activity to beta matrix economically reviewReverse override the
                digital.
              </span>
                            <p>View more</p>
                        </div>
                    </div>
                </div>
                <div className={style.corporationLawsBlock}>
                    <div className={style.corporationLawsContent}>
                        <div>
                            <Image src={imageObject.law1} alt="law1 not found"/>
                            <div className={style.headerCorporateLaw}>
                                <span>Corporate Law</span>
                                <span>Friday, February 4,2022</span>
                            </div>
                            <div className={style.discriptionCorporateLaw}>
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
                            <div className={style.discriptionCorporateLaw}>
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
                            <div className={style.discriptionCorporateLaw}>
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
                            <div className={style.discriptionCorporateLaw}>
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
                            <div className={style.discriptionCorporateLaw}>
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
                            <div className={style.discriptionCorporateLaw}>
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
            </main>
            <footer className={style.footerBlock}>
                <Image src={imageObject.footerStart} alt="footerStart not found"/>
                <div className={style.footerHeadBlock}>
                    <Image src={imageObject.footerLeft} alt="leftFooter not found"/>
                    <Image
                        className={style.logoFooter}
                        src={imageObject.siteLogo}
                        alt="siteFooterLogo not found"
                    />
                    <Image src={imageObject.footerRight} alt="rightFooter not found"/>
                </div>
                <div className={style.footerLinks}>
                    <div className={style.linkColumnDuo}>
                        <span>Quick Link</span>
                        <div>
                            <div>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Pricing</p>
                                <p>Testimonial</p>
                                <p>Contact Us</p>
                            </div>
                            <div>
                                <p>Blog</p>
                                <p>Blog Single</p>
                                <p>Cases</p>
                                <p>Cases Single</p>
                                <p>Practice Areas</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.linkColumn}>
                        <span>Utility Pages</span>
                        <div>
                            <p>Style guide</p>
                            <p>Licenses</p>
                            <p>Protected</p>
                            <p>Changelog</p>
                            <p>Error Page</p>
                        </div>
                    </div>
                    <div className={style.linkColumn}>
                        <span>Practice Area</span>
                        <div>
                            <p>Business Law</p>
                            <p>Construction Law</p>
                            <p>Car Accident</p>
                            <p>Criminal Law</p>
                            <p>Family Law</p>
                        </div>
                    </div>
                    <div className={style.linkColumn}>
                        <span>Contact Us</span>
                        <div className={style.contactColumn}>
                            <div>
                                <p>Attorney Law Office, 121 King Street,</p>
                                <p>Las Vegas 90027,USA.</p>
                            </div>
                            <div>
                                <p>Phone: (011) 9876 54321</p>
                                <p>Email: info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.footerLinksHead}>
          <span>
            Copyright © Attorney Law | Designed by
            <a href="https://vk.com/snaiperyga"> Uladzislau Astapuk</a> -
            Powered by <a href="#">Webflow</a>
          </span>
                    <span>
            <a href="#">Follow :</a>
            <Image
                src={imageObject.whiteFacebook}
                alt="facebook logo not found"
            />
            <Image
                src={imageObject.whiteTwitter}
                alt="twitterLogo logo not found"
            />
            <Image
                src={imageObject.whiteInstagram}
                alt="instagramLogo logo not found"
            />
            <Image
                src={imageObject.whitePint}
                alt="pinterestLogo logo not found"
            />
          </span>
                </div>
            </footer>
        </div>
    );
};


export default AttorneysterMain;