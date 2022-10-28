<<<<<<< HEAD
import Head from 'next/head'
import checkattendance from './checkattendance.js';
=======
import Head from "next/head";
import Link from "next/link";
>>>>>>> a718751120f7660f9ab66b024ebc4123caa2cd25

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Attendance </title>
        <meta name="description" content="This is how we do it." />
        <link rel="icon" href="/icons8-immigration-64.png" />
      </Head>
      <div className="total__bg">
        <div className="index__everything">
          <div className="index__links">
            <Link href="/attendance_table">
              <button className="button1">Attendance Page</button>
            </Link>

            <Link href="/login">
              <button className="button2">Teacher Login Page</button>
            </Link>
          </div>
        </div>
        <img
          src="http://smartattendanceapp.com/img/footerlogo.png"
          className="index__login"
        ></img>
      </div>

      {/* <main class="text-center font-sans font-bold text-9xl">
        
        <br />
        Smart Attendance
        <br />
        <div class="text-2xl">
          <div>
            <Link href="/login">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full text-2xl px-4 py-2 mt-10 shadow-lg">
                Login
              </button>
            </Link>
          </div>
          <div>
            <Link href="/signup">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full text-2xl px-4 py-2 mt-5 shadow-lg"
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
        </main>
      */}
<<<<<<< HEAD
      Start of the project.
      
    </div>
=======
      <div className="total__bg">
        <div className="index__everything">
          <div className="index__links">
            <Link href="/attendance_table">
              <button className="button1">Attendance Page</button>
            </Link>

            <Link href="/login">
              <button className="button2">Teacher Login Page</button>
            </Link>
          </div>
        </div>
        <img
          src="http://smartattendanceapp.com/img/footerlogo.png"
          className="index__login"
        ></img>
      </div>

      {/* <main class="text-center font-sans font-bold text-9xl">
        
        <br />
        Smart Attendance
        <br />
        <div class="text-2xl">
          <div>
            <Link href="/login">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full text-2xl px-4 py-2 mt-10 shadow-lg">
                Login
              </button>
            </Link>
          </div>
          <div>
            <Link href="/signup">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full text-2xl px-4 py-2 mt-5 shadow-lg"
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
        </main>
      */}
    </>
>>>>>>> a718751120f7660f9ab66b024ebc4123caa2cd25
  );
}
