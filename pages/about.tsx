import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About - Albert</title>
                <meta name="description" content="About me" />
                <meta name="keywords" content="albert, castel, rapu, about, me" />
            </Head>
            <Navbar/>

            <main className={styles.main}>
                <h1>About Page</h1>
                <h1 className={styles.title}>
                    Go to <Link href="/">Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/about.tsx</code>
                </p>
            </main>
        </div>
    );
}
