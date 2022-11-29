import React from "react";
import Head from "next/head";
import Link from "next/link";
function teacher() {
  return (
    <div className="teach">
      <Head>
        <title>Teacher page</title>
      </Head>
      {/* <div className="titlename">Teacher Page</div> */}
      <img className="teachimg" src="https://cdn-icons-png.flaticon.com/512/747/747086.png" alt="teacher image" />
      <div className="teacher">
        <Link href="/checkattendance">
          <button className="button3">Check Attendance</button>
        </Link>

        <Link href="/newpic">
          <button className="button4">Image Upload</button>
        </Link>
      </div>
    </div>
  );
}

export default teacher;
