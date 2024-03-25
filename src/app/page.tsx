import styles from "./page.module.css";
import AttorneysterMain from "@/page/AttorneysterMain";

export default function Home() {
    return (
        <main className={styles.main}>
            <AttorneysterMain/>
        </main>
    );
}
