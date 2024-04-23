"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

export default function Home() {
  const handleClick = () => {};
  return (
    <div className="">
      <section className="h-16 bg-white-300 flex items-center justify-end px-16 sticky top-0 z-10">
        <div className="inner-div sticky top-0">
          {" "}
          <Button
            variant="outlined"
            endIcon={<LoginIcon />}
            onClick={handleClick}
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </section>
      <main className="flex justify-center p-32 gap-16 bg-gray-200 h-screen">
        <div className="links">
          {" "}
          {/* New wrapper for links */}
          <Link
            href="/typeform"
            className="border border-gray-400 p-2 bg-black text-white"
          >
            Typeform test
          </Link>
          <Link
            href="/slack"
            className="border border-gray-400 p-2 bg-black text-white"
          >
            Slack test
          </Link>
        </div>
      </main>
    </div>
  );
}
