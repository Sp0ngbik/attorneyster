import styles from "./page.module.css";
import AttorneysterMain from "@/page/AttorneysterMain";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <ToastContainer theme={'light'} position={'top-center'} hideProgressBar autoClose={2000}/>
            <AttorneysterMain/>
        </main>
    );
}
