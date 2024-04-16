import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center p-32 gap-16">
      <Link
        href="/Testfiles/typeform"
        className="border border-gray-400 p-2 bg-black text-white"
      >
        Typeform test
      </Link>
      <Link
        href="/Testfiles/slack"
        className="border border-gray-400 p-2 bg-black text-white"
      >
        Slack test
      </Link>
    </main>
  );
}
