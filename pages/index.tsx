import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { signIn, signOut, useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

const Home: NextPage = () => {
  // const { data: session } = useSession();
  // // 사용자 정보 있으면, 사용자 이름과 로그아웃 버튼 출력
  // if (session) {
  //   return (
  //     <>
  //       <div>
  //         Signed in as {session.user?.name} <br />
  //         <button
  //           onClick={() => {
  //             signOut();
  //           }}
  //         >
  //           Sign out
  //         </button>
  //       </div>
  //     </>
  //   );
  // }
  // 사용자 정보 없으면, 로그인 버튼 출력 - signIn() 함수는 next-auth기본 로그인화면으로 이동시켜준다.
  return (
    <div>
      <Head>
        <title>Comparison between Vitest and Jest</title>
        <meta
          name="description"
          content="compare the performance of two testing tools"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.subtitle}>
          Let&apos;s Compare the performance of two testing tools
        </h1>
        Not signed in <br />
        <button
          onClick={() => {
            signIn();
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/kakao.png" alt="KakaoTalk Logo" width={16} height={16} />
          Sign in
        </button>
      </main>
    </div>
  );
};

export default Home;
