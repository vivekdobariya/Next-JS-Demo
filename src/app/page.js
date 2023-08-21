"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main >
      <h1>Next Js</h1>
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>GO to Login</button>
      <br /><br />
      <button onClick={() => navigate("/about")}>GO to About</button>
    </main>
  )
}



