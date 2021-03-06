import{ getProviders, signIn as signIntoProvider} from "next-auth/react";
import Header from "../../components/Header";

function signIn({providers}) {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center
      min-h-screen py-2 -mt-56 px-14 text-center'>
        <img className="w-80" src="http://www.sunimprint.com/images/Cal%20State%20Fullerton%20Titans%201992-2009%20Wordmark%20Logo%20diy%20iron%20on%20transfers%203.png"
        alt="" />
        <p className=" font-xs">
          Welcome to TitanTalks! This is our version of an Instagram Clone!
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={() => signIntoProvider(provider.id, { callbackUrl: "/"})}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(){
  const providers = await getProviders();

  return {
    props: { 
      providers,
    },
  };
}

export default signIn;