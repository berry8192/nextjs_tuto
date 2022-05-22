import styles from '../components/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

// pages/404.js
export default function Custom404() {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <Image
                priority
                height={600}
                width={800}
                src="/images/404cat.jpg"
            />
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </>
    );
}