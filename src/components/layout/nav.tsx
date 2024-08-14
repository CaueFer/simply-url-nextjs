"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="absolute top-0 inset-x-0 py-8 px-10 md:px-20 max-w-7xl mx-auto flex flex-row justify-between bg-transparent text-white z-40">
      <p
        className="text-xl cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Simply Url
      </p>
      <div className="flex gap-4 text-md text-gray-300">
        <Link
          href="/"
          style={{
            color: currentPath === "/" ? "white" : "",
          }}
          className={` border-white
            ${currentPath === "/" ? "border-b" : ""}
            `}
        >
          Simplificar
        </Link>
        <Link
          href="/pricing"
          style={{
            color: currentPath === "/pricing" ? "white" : "",
          }}
          className={` border-white
            ${currentPath === "/pricing" ? "border-b" : ""}
            `}
        >
          Planos
        </Link>
      </div>
    </div>
  );
}
