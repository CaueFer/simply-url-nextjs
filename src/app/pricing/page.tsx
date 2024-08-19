"use client";

import DefaultFooter from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pricing() {
  const router = useRouter();

  return (
    <>
      <Nav />
      <main className="relative min-h-screen flex flex-col gap-10 items-center justify-center px-5 py-20 text-white max-w-7xl">
        <section className="bg-transparent">
          {" "}
          <div className="mx-auto max-w-screen-xl py-16 lg:px-6 px-4 ">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
                Links são grandes e chatos, mude isso!
              </h2>
              <p className="mb-5 font-light text-gray-300 text-xl text-pretty">
                Simplifique e reduza seus links mais importantes, deixe seus
                clientes se preocuparam com o que importar.
              </p>
            </div>

            <div className="space-y-8 xl:grid xl:grid-cols-3 sm:gap-6 xl:gap-10 xl:space-y-0">
              <div className="mx-auto max-w-sm min-w-[320px] max-h-[600px] bg-gradient-to-br from-violet-700 via-black to-violet-950 p-[1px] rounded-3xl drop-shadow-lg shadow hover:scale-[1.05] transition-transform duration-300">
                <div className="flex flex-col p-10 text-center rounded-3xl bg-theme-dark/90 text-white">
                  <h3 className="mb-4 text-xl font-semibold text-start uppercase">
                    Starter
                  </h3>
                  <p className="font-light text-gray-200 sm:text-lg text-start">
                    Melhor opção para estudantes e entusiastas.
                  </p>
                  <div className="flex justify-start items-baseline my-8">
                    <span className="mr-2 text-5xl font-light">R$0</span>
                    <span className="text-gray-300">/mes</span>
                  </div>

                  <ul
                    role="list"
                    className="mb-8 space-y-4 text-left  text-white"
                  >
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>10x Usos /m</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Sem Analitycs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Url padrão
                        <span className="font-semibold"></span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Suporte Premium:
                        <span className="font-semibold"> 0 meses</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Updates grátis:
                        <span className="font-semibold"> 0 meses</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="javascript:void(0)"
                    className="text-white bg-violet-700 font-medium rounded-lg text-sm p-[1px] text-center"
                  >
                    <div
                      className="bg-gradient-to-r from-indigo-800 to-violet-950 px-5 py-2.5 hover:to-violet-950 transition-colors duration-500 rounded-lg font-extrabold uppercase"
                      onClick={() => {
                        router.push('./');
                      }}
                    >
                      ACESSAR
                    </div>
                  </a>
                </div>
              </div>

              <div className="mx-auto max-w-sm min-w-[320px] max-h-[600px] bg-gradient-to-br from-violet-400 via-black to-violet-700 p-[1px] rounded-3xl drop-shadow-lg shadow hover:scale-[1.05] transition-transform duration-300">
                <div className="flex flex-col p-10 text-center rounded-3xl bg-theme-dark/90 text-white">
                  <h3 className="mb-4 text-xl font-semibold text-start uppercase">
                    Company
                  </h3>
                  <p className="font-light text-gray-200 sm:text-lg text-start">
                    Perfeito para médios negócios, traga facilidade para seus
                    clientes.
                  </p>
                  <div className="flex justify-start items-baseline my-8">
                    <span className="mr-2 text-5xl font-light">R$99</span>
                    <span className="text-gray-300">/mes</span>
                  </div>

                  <ul
                    role="list"
                    className="mb-8 space-y-4 text-left  text-white"
                  >
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>100x Usos /m</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Analitycs Avançada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Url customizada
                        <span className="font-semibold"></span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Suporte Premium:{" "}
                        <span className="font-semibold">24 meses</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Updates grátis:{" "}
                        <span className="font-semibold">24 meses</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-violet-700 font-medium rounded-lg text-sm p-[1px] text-center"
                  >
                    <div className="bg-gradient-to-r from-indigo-800 to-violet-950 px-5 py-2.5 hover:to-violet-950 transition-colors duration-500 rounded-lg font-extrabold uppercase ">
                      Ver mais
                    </div>
                  </a>
                </div>
              </div>

              <div className="mx-auto max-w-sm min-w-[320px] max-h-[600px] bg-gradient-to-br from-violet-950 via-black to-violet-700 p-[1px] rounded-3xl drop-shadow-lg shadow hover:scale-[1.05] transition-transform duration-300">
                <div className="flex flex-col p-10 text-center rounded-3xl bg-theme-dark/90 text-white">
                  <h3 className="mb-4 text-xl font-semibold text-start uppercase">
                    Enterprise
                  </h3>
                  <p className="font-light text-gray-200 sm:text-lg text-start">
                    Melhor para grande negócios, amplie sua rede.
                  </p>
                  <div className="flex justify-start items-baseline my-8">
                    <span className="mr-2 text-5xl font-light">R$499</span>
                    <span className="text-gray-300">/mes</span>
                  </div>

                  <ul
                    role="list"
                    className="mb-8 space-y-4 text-left  text-white"
                  >
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Uso ilimitado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Analitycs Avançada</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Url customizada
                        <span className="font-semibold"></span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Suporte Premium:{" "}
                        <span className="font-semibold">36 meses</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Updates grátis:{" "}
                        <span className="font-semibold">36 meses</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-violet-700 font-medium rounded-lg text-sm p-[1px] text-center"
                  >
                    <div className="bg-gradient-to-r from-indigo-800 to-violet-950 px-5 py-2.5 hover:to-violet-950 transition-colors duration-500 rounded-lg font-extrabold uppercase ">
                      Ver mais
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DefaultFooter />
    </>
  );
}
