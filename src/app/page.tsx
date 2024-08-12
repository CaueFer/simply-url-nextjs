import DefaultFooter from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import LinkForm from "@/components/ui/linkForm";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen flex flex-col gap-10 items-center justify-center p-24 text-white max-w-7xl">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-6xl font-bold ">Simply Url</h1>
          <h1 className="text-2xl text-gray-300">
            Reduza e simplifique seus links com apenas 1 clique.
          </h1>
        </div>

        <LinkForm ></LinkForm>
      </main>
      <DefaultFooter />
    </>
  );
}
