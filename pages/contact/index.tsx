import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact - Albert</title>
                <meta name="description" content="contact information" />
                <meta name="keywords" content="albert, castel, rapu, contact, me" />
            </Head>
            <Navbar/>

            <main className={styles.main}>
                <h1>Contact </h1>
                <h1 className={styles.title}>
                    Go to <Link href="/">Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/contact.tsx</code>
                </p>
            </main>
        </div>
    );
}
