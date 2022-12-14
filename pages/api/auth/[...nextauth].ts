import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "secret",
  },
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  //pages에, 로그인 화면의 경로를 지정해준다.
  // pages: {
  //   signIn: "/auth/login",
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("token", token);
      console.log("account", account);
      console.log("user", user);
      if (account) {
        token.accessToken = account.access_token;
      }
      // if(account?.provider && !token[account.provider]) {
      //   token[account.provider] = {}
      // }
      // if (account?.access_token) {
      //   token[account.provider] = account.access_token
      // }
      // console.log(account);
      return token;
      // Initial sign in
    },
  },
  // callbacks: {

  //   async jwt({ token, account }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     console.log(token);
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
});
