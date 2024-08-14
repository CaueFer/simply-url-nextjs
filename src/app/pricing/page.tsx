import DefaultFooter from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Pricing() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen flex flex-col gap-10 items-center justify-center px-5 py-20 text-white max-w-7xl">
        <section className="bg-transparen">
          {" "}
          <div className=" px-4 mx-auto max-w-screen-xl py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extraboldtext-white">
                Links são grandes e chatos, mude isso!
              </h2>
              <p className="mb-5 font-light text-gray-400">
                Simplifique e reduza seus links mais importantes, deixe seus
                clientes se preocuparam com o que importar.
              </p>
            </div>

            <div className="space-y-8 xl:grid xl:grid-cols-3 sm:gap-6 xl:gap-10 xl:space-y-0">
              <div className="flex flex-col p-6 mx-auto max-w-sm min-w-[320px] text-center max-h-[514px] text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Melhor opção para estudantes e hobbies.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">R$0</span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <Icon
                      icon="pepicons-pop:line-x"
                      className="text-md text-black"
                    ></Icon>
                    <span>100x usos /m</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon
                      icon="gg:close"
                      className="text-md text-red-600"
                    ></Icon>
                    <span>Analitycs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon
                      icon="gg:close"
                      className="text-md text-red-600"
                    ></Icon>
                    <span>Url customizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
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
                      <span className="font-semibold">6 meses</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      <span className="font-semibold">6 meses</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-violet-700 hover:bg-violet-900 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Ver mais
                </a>
              </div>

              <div className="flex flex-col p-6 mx-auto max-w-sm min-w-[320px] text-center max-h-[514px] text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Perfeito para negócios, traga facilidade para seus clientes.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">R$99</span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <Icon
                      icon="pepicons-pop:line-x"
                      className="text-md text-black"
                    ></Icon>
                    <span>1000x usos /m</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                  className="text-white bg-violet-700 hover:bg-violet-900 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Ver mais
                </a>
              </div>

              <div className="flex flex-col p-6 mx-auto max-w-sm min-w-[320px] text-center max-h-[514px] text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Melhor para grande negócios, amplie sua rede.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">R$499</span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
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
                  className="text-white bg-violet-700 hover:bg-violet-900 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Ver mais
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DefaultFooter />
    </>
  );
}
