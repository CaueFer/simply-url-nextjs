"use client";

import { ShortLink } from "@/libs/utils/shortLink.interface";
import { Icon } from "@iconify/react";
import { useState } from "react";
require("dotenv").config();

export default function LinkForm() {
  const [urlValue, setUrlValue] = useState<string | null>(null);

  const [urlShortedValue, setUrlShortedValue] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (urlValue && isValidUrl(urlValue)) shortLink(urlValue);
    else return setError("Link fornecido é inválido.");
  };

  const shortLink = async (urlValue: string) => {
    setError(null);

    const serverUrl = process.env.NEXT_PUBLIC_SERVERURL;

    if (!serverUrl) {
      console.error("URL do servidor não está definida.");
      return;
    }

    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ redirectUrl: urlValue }),
      });

      const data: ShortLink = await response.json();
      console.log(data);

      setUrlShortedValue(data.url);
    } catch (error) {
      console.error("Erro ao encurtar o link:", error);
    }
  };

  const isValidUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[100%]">
        <input
          className="p-5 text-md bg-gray-800 text-white opacity-80 rounded-lg font-normal"
          type="text"
          placeholder="Digite ou cole uma url aqui..."
          value={urlValue ? urlValue : ""}
          onChange={(e) => setUrlValue(e.target.value)}
        />
        {error ? <p className="text-sm ">{error}</p> : ""}
        <button
          className="p-4 text-md bg-violet-800 hover:bg-violet-900 font-bold rounded-lg flex flex-row justify-center items-center gap-3 drop-shadow-lg shadow-xl uppercase leading-[16.41px] transition-colors"
          type="submit"
        >
          SIMPLIFICAR
          <Icon
            icon="fa6-solid:wand-magic-sparkles"
            className="text-xl align-middle"
          />
        </button>
      </form>

      {urlShortedValue === "" ? (
        <div className="h-full w-full bg-indigo-950 rounded-md p-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 flex flex-col justify-start gap-3">
          <h1> Seu link simplificado:</h1>
          <div className="flex justify-start items-center gap-3 text-xl">
            <h2>{process.env.NEXT_PUBLIC_SERVERURL + "/" + urlShortedValue}</h2>
            <button className="p-2 text-md  text-violet-800 font-bold rounded-lg flex flex-row justify-center items-center gap-3 drop-shadow-lg shadow-xl uppercase leading-[16.41px] transition-colors">
              <Icon
                icon="clarity:copy-solid"
                className="text-xl align-middle"
              />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
