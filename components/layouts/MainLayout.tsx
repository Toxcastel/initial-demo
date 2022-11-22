import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

interface props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({children}:props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Albert</title>
                <meta name="description" content="Homepage of my super website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};
