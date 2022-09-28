import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => {
          signIn("kakao");
        }}
      >
        Sign in
      </button>
    </>
  );
  // const { data: session, status } = useSession();
  // const loading = status === "loading";
  // return (
  //   <>
  //     <div>
  //       {!session && (
  //         <ul>
  //           <li>
  //             <a
  //               href={"/api/auth/signin"}
  //               onClick={(e) => {
  //                 e.preventDefault();
  //                 signIn("kakao");
  //               }}
  //             >
  //               Kakao Sign in
  //             </a>
  //           </li>
  //         </ul>
  //       )}
  //     </div>
  //   </>
  // );
};

export default Home;
