import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({  
  // Configure one or more authentication providers  

  providers: [   
     GoogleProvider({      
      clientId: process.env.GOGGLE_CLIENT_ID,      
      clientSecret: process.env.GOGGLE_CLIENT_SECRET
    }),    
    // ...add more providers here  
  ],

  //our own login page, in our own created /auth/ /auth/signin

  pages: {
    signIn: "/auth/signin",
  },
  callbacks:{
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      
      return session;
    }
  }


})