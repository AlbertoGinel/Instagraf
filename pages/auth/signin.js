//import { async } from "@firebase/util"

import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { useCallback } from "react";
import Header from "../../components/Header";

//Browser...
function signIn({ providers }) {

  return (
    <>  
      <Header/>

      <div className="flex flex-col items-center justify-center 
        min-h-screen py-2  px-14 text-center">

        <img className="w-80" src="http://links.papareact.com/ocw"/>

        <p className="font-xs italic">
          This is not a commercial app, its build for educational purposes only
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button 
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  ) 
}

//server side, uses api/auth/[...nextauth].js

export async function getServerSideProps(){

  const providers = await getProviders();

  return {
    props: {
      providers
    },
  };
}

export default signIn;