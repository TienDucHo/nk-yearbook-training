import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import aboutStyles from "../styles/About.module.scss";

export default function Home() {
  return (
    <div className={aboutStyles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Blog about PTNK-VNUHCM" />
        <link rel="icon" href="/logoNK2.png" />
      </Head>

      <main className={aboutStyles.main}>
        <h1 className={aboutStyles.title}>
          Mình là <span>Tiến Đức</span>
        </h1>
        <div className={aboutStyles.imageContainer}>
          <Image
            src="/Avatar.jpg"
            alt="Avatar"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className={aboutStyles.navigators}>
          <Link href="/">
            <a className={aboutStyles.link}>Trang chủ</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
