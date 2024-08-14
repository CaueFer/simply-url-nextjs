"use client";

import useCopyToClipboard from "@/lib/hooks/useCopyToClipboard";
import { ShortLink } from "@/lib/utils/shortLink.interface";
import { Icon } from "@iconify/react";
import { useState } from "react";
import QRCodeComponent from "./qrcode";
import { useToast } from "./use-toast";
import { useRouter } from "next/navigation";
require("dotenv").config();

export default function LinkForm() {
  const router = useRouter();

  const { toast } = useToast();

  const [urlValue, setUrlValue] = useState<string | null>(null);
  const [urlValueUsed, setUrlValueUsed] = useState<string>("");
  const [urlShortedValue, setUrlShortedValue] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showQrCode, setShowQrCode] = useState<boolean>(false);

  const [copied, setCopied] = useState(false);
  const copyToClipboard = useCopyToClipboard();

  const handleCopy = async () => {
    if (urlShortedValue) {
      await copyToClipboard(urlShortedValue);

      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (urlValue && urlValue !== "") {
      if (urlValue === urlValueUsed) return;

      if (isValidUrl(urlValue)) shortLink(urlValue);
      else setError("Link fornecido é inválido.");
    }
  };

  const shortLink = async (urlValue: string) => {
    setIsLoading(true);
    setError(null);

    const serverUrl = process.env.NEXT_PUBLIC_SERVERURL;

    await new Promise((resolve) => setTimeout(resolve, 2000));

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
      if (data) {
        setUrlValueUsed(urlValue);

        setIsLoading(false);

        const finalUrl = process.env.NEXT_PUBLIC_SERVERURL + "/" + data.url;
        setUrlShortedValue(finalUrl);
      }
    } catch (error) {
      setIsLoading(false);

      toast({
        title: "Ocorreu um erro",
        description: "Tente novamente mais tarde!",
        variant: "destructive",
      });
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
          className={`p-4 text-md bg-violet-800 hover:bg-violet-900 font-bold rounded-lg flex flex-row justify-center items-center gap-3 drop-shadow-lg shadow-xl uppercase leading-[16.41px] transition-colors
            ${isLoading ? "animate-pulse cursor-wait" : ""}
          `}
          disabled={isLoading}
          type="submit"
        >
          SIMPLIFICAR
          <Icon
            icon="fa6-solid:wand-magic-sparkles"
            className="text-xl align-middle"
          />
        </button>
      </form>

      {urlShortedValue ? (
        <div
          className={`relative w-full accordion-content
          ${
            urlShortedValue
              ? "accordion-content-expand"
              : "accordion-content-collapse"
          }`}
        >
          <div
            className={`w-full h-full bg-gradient-to-t from-theme-dark/50 to-theme-dark-sec/50 rounded-lg p-4 py-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800 flex flex-col justify-center items-center gap-6`}
          >
            <h1 className="uppercase text-xs font-bold">
              Seu link simplificado{" "}
            </h1>
            <div className="flex flex-col justify-center items-center gap-3 text-xl">
              <h2>{urlShortedValue}</h2>
              <div className="flex gap-3 text-md">
                <button
                  className="p-2 text-white bg-violet-800 hover:bg-violet-900 hover:text-white/80 font-bold rounded-lg flex flex-row justify-center items-center gap-3 drop-shadow-lg shadow-xl uppercase leading-[16.41px]"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <Icon
                      icon="material-symbols:check"
                      className=" align-middle"
                    />
                  ) : (
                    <Icon icon="clarity:copy-solid" className=" align-middle" />
                  )}
                </button>

                <button
                  className="p-2 text-white bg-violet-800 hover:bg-violet-900 hover:text-white/80 font-bold rounded-lg flex flex-row justify-center items-center gap-3 drop-shadow-lg shadow-xl uppercase leading-[16.41px]"
                  onClick={() => {
                    setShowQrCode(!showQrCode);
                  }}
                >
                  <Icon icon="ic:round-qrcode" className=" align-middle" />
                </button>
              </div>
              {showQrCode && urlShortedValue ? (
                <QRCodeComponent value={urlShortedValue} size={230} />
              ) : (
                <div className="w-full h-[100px] flex flex-col justify-end items-center gap-6 pb-6">
                  <div className="flex flex-row gap-2 justify-center items-center px-4 py-2 bg-violet-800 hover:bg-violet-900 rounded-lg cursor-pointer">
                    <h2 className="uppercase text-xs font-bold" onClick={() => {router.push('/pricing')}}>
                      Customizar url
                    </h2>
                    <Icon icon="tabler:edit" className="text-md"/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
