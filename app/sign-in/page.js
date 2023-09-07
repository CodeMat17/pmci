"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInPage = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [data, setData] = useState(null);

  const handleSignUp = async () => {
    setLoading(true);
    setErrorMsg(null);
    if (!email || !password) {
      setErrorMsg("Fill both the email and password");
      setLoading(false);
    }

    if (email || password) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        });

        if (error) {
          setErrorMsg(error.message);
        }
        if (data) {
          // setData(data);
          router.refresh();
          router.push("/admin");
        }
      } catch (error) {
        console.log("ERROR MSG: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className='px-4 pt-20 pb-12 w-full min-h-[100vh]'>
      <div className='border px-4 py-8 w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg'>
        {errorMsg && (
          <p className='pb-4 text-center text-sm text-red-500'>{errorMsg}</p>
        )}
        <h1 className='text-4xl text-center '>Sign In</h1>
        <div className='mt-4 space-y-4'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email address'
            className='border w-full rounded-lg p-3 '
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            className='border w-full rounded-lg p-3 '
          />
        </div>
        <div className='mt-6 w-full'>
          <button
            onClick={handleSignUp}
            className='border w-full py-3 tracking-wider bg-blue-900 hover:bg-blue-700 text-white rounded-xl'>
            {loading ? "Please wait..." : "Sign in"}
          </button>
        </div>

        {/* {data && <p>Check your email</p>} */}
      </div>
    </div>
  );
};

export default SignInPage;
