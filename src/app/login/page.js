'use client';
import {signIn} from "next-auth/react";
import Image from "next/image";
import {useState} from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState(null);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true); 

    const result = await signIn('credentials', {email, password, callbackUrl: '/'});

    if (result?.error) {
      setError(result.error);
    } else {
      console.log("Giriş başarılı!");
    }

    setLoginInProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Giriş Yap
      </h1>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
               disabled={loginInProgress}
               onChange={ev => setEmail(ev.target.value)} />
        <input type="password" name="password" placeholder="password" value={password}
               disabled={loginInProgress}
               onChange={ev => setPassword(ev.target.value)}/>
        <button disabled={loginInProgress} type="submit">Giriş Yap</button>
        <div className="my-4 text-center text-gray-500">
          Veya
        </div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
                className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Google ile giriş yap
        </button>
      </form>
    </section>
  );
}
