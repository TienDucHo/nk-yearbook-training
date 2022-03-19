import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import homeStyles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>NK Blog</title>
        <meta name="description" content="Blog about PTNK-VNUHCM" />
        <link rel="icon" href="/logoNK2.png" />
      </Head>

      <main className={homeStyles.main}>
        <h1 className={homeStyles.title}>
          Chào mừng tới Blog của <span>Năng Khiếu</span>
        </h1>

        <div className={homeStyles.navigators}>
          <Link href="/about">
            <a className={homeStyles.link}>Về tớ</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
