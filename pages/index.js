import Head from 'next/head'
// import checkattendance from './checkattendance.js';
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Attendance </title>
        <meta name="description" content="This is how we do it." />
        <link rel="icon" href="/icons8-immigration-64.png" />
      </Head>

      <div className="total__bg">
        
        <div className="index__links">
          <Link href="/checkattendance">
            <button className="button1">Attendance Page</button>
          </Link>

          <Link href="/login">
            <button className="button2">Teacher Login Page</button>
          </Link>
        </div>
        <img
          src="http://smartattendanceapp.com/img/footerlogo.png"
          className="index__login"
        ></img>
        
        <div className="write_up">
          IMPROVE THE WRITE UP. A revolutionary piece of software that
          simplifies the tedious task of taking attendance hassle free. Please
          go ahead and try this for yourself.
        </div>
      </div>
    </>
  );
}
