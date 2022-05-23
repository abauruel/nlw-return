import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import IdeaImageUrl from "../../assets/ideia.svg";
import otherImageUrl from "../../assets/others.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
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

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center  shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartrequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedBackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
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
