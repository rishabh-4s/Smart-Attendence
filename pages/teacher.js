import React from "react";
import Head from "next/head";
import Link from "next/link";
function teacher() {
  return (
    <div className="teach">
      <Head>
        <title>Teacher page</title>
      </Head>
      <div className="titlename">Teacher Page</div>
      <img className="teachimg" src="Teacherimg.webp" alt="teacher image" />
      <div className="teacher">
        <Link href="/checkattendance">
          <button className="button3">Attendance Page</button>
        </Link>

        <Link href="/picupload">
          <button className="button4">Picture Upload Page</button>
        </Link>
      </div>
    </div>
  );
}

export default teacher;
