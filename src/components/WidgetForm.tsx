import { CloseButton } from "./CloseButton";
import bugImageUrl from "../assets/bug.svg";
import IdeaImageUrl from "../assets/ideia.svg";
import otherImageUrl from "../assets/others.svg";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "problema",
    image: {
      source: bugImageUrl,
      alt: "imagem de inseto",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: IdeaImageUrl,
      alt: "imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "imagem de uma nuvem azul",
    },
  },
};

type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center  shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
              type="button"
              onClick={() => setFeedbackType(key as feedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        feito com pelo{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
