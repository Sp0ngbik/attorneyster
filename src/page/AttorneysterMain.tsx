import React from 'react';

import style from "./AttorneysterMain.module.scss";
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
        </div>
    );
};


export default AttorneysterMain;