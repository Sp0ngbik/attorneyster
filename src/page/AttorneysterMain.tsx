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
import RecentBlog from "@/components/recentBlog/RecentBlog";
import News from "@/components/news/News";
import Footer from "@/layout/Footer/Footer";

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
                <RecentBlog/>
                <News/>
            </main>
            <Footer/>
            {/*  <footer className={style.footerBlock}>*/}
            {/*      <Image src={imageObject.footerStart} alt="footerStart not found"/>*/}
            {/*      <div className={style.footerHeadBlock}>*/}
            {/*          <Image src={imageObject.footerLeft} alt="leftFooter not found"/>*/}
            {/*          <Image*/}
            {/*              className={style.logoFooter}*/}
            {/*              src={imageObject.siteLogo}*/}
            {/*              alt="siteFooterLogo not found"*/}
            {/*          />*/}
            {/*          <Image src={imageObject.footerRight} alt="rightFooter not found"/>*/}
            {/*      </div>*/}
            {/*      <div className={style.footerLinks}>*/}
            {/*          <div className={style.linkColumnDuo}>*/}
            {/*              <span>Quick Link</span>*/}
            {/*              <div>*/}
            {/*                  <div>*/}
            {/*                      <p>Home</p>*/}
            {/*                      <p>About Us</p>*/}
            {/*                      <p>Pricing</p>*/}
            {/*                      <p>Testimonial</p>*/}
            {/*                      <p>Contact Us</p>*/}
            {/*                  </div>*/}
            {/*                  <div>*/}
            {/*                      <p>Blog</p>*/}
            {/*                      <p>Blog Single</p>*/}
            {/*                      <p>Cases</p>*/}
            {/*                      <p>Cases Single</p>*/}
            {/*                      <p>Practice Areas</p>*/}
            {/*                  </div>*/}
            {/*              </div>*/}
            {/*          </div>*/}
            {/*          <div className={style.linkColumn}>*/}
            {/*              <span>Utility Pages</span>*/}
            {/*              <div>*/}
            {/*                  <p>Style guide</p>*/}
            {/*                  <p>Licenses</p>*/}
            {/*                  <p>Protected</p>*/}
            {/*                  <p>Changelog</p>*/}
            {/*                  <p>Error Page</p>*/}
            {/*              </div>*/}
            {/*          </div>*/}
            {/*          <div className={style.linkColumn}>*/}
            {/*              <span>Practice Area</span>*/}
            {/*              <div>*/}
            {/*                  <p>Business Law</p>*/}
            {/*                  <p>Construction Law</p>*/}
            {/*                  <p>Car Accident</p>*/}
            {/*                  <p>Criminal Law</p>*/}
            {/*                  <p>Family Law</p>*/}
            {/*              </div>*/}
            {/*          </div>*/}
            {/*          <div className={style.linkColumn}>*/}
            {/*              <span>Contact Us</span>*/}
            {/*              <div className={style.contactColumn}>*/}
            {/*                  <div>*/}
            {/*                      <p>Attorney Law Office, 121 King Street,</p>*/}
            {/*                      <p>Las Vegas 90027,USA.</p>*/}
            {/*                  </div>*/}
            {/*                  <div>*/}
            {/*                      <p>Phone: (011) 9876 54321</p>*/}
            {/*                      <p>Email: info@example.com</p>*/}
            {/*                  </div>*/}
            {/*              </div>*/}
            {/*          </div>*/}
            {/*      </div>*/}
            {/*      <div className={style.footerLinksHead}>*/}
            {/*<span>*/}
            {/*  Copyright © Attorney Law | Designed by*/}
            {/*  <a href="https://vk.com/snaiperyga"> Uladzislau Astapuk</a> -*/}
            {/*  Powered by <a href="#">Webflow</a>*/}
            {/*</span>*/}
            {/*          <span>*/}
            {/*  <a href="#">Follow :</a>*/}
            {/*  <Image*/}
            {/*      src={imageObject.whiteFacebook}*/}
            {/*      alt="facebook logo not found"*/}
            {/*  />*/}
            {/*  <Image*/}
            {/*      src={imageObject.whiteTwitter}*/}
            {/*      alt="twitterLogo logo not found"*/}
            {/*  />*/}
            {/*  <Image*/}
            {/*      src={imageObject.whiteInstagram}*/}
            {/*      alt="instagramLogo logo not found"*/}
            {/*  />*/}
            {/*  <Image*/}
            {/*      src={imageObject.whitePint}*/}
            {/*      alt="pinterestLogo logo not found"*/}
            {/*  />*/}
            {/*</span>*/}
            {/*      </div>*/}
            {/*  </footer>*/}
        </div>
    );
};


export default AttorneysterMain;