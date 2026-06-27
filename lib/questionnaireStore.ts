"use client";

import type { QuestionnaireAnswers } from "@/content/questionnaire/types";
import { questionnaireSeed } from "@/content/questionnaire/seed";

const K_QUESTIONNAIRE = "pues:questionnaire-answers";

function isBrowser() {
  return typeof window !== "undefined";
}

function read<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event("pues:questionnaire-change"));
    // Let the cloud sync layer (lib/sync.ts) mirror this write upstream.
    window.dispatchEvent(new CustomEvent("pues:mutate", { detail: { key } }));
  } catch {
    /* ignore quota / private mode */
  }
}

export function getQuestionnaireAnswers(): QuestionnaireAnswers {
  const stored = read<QuestionnaireAnswers>(K_QUESTIONNAIRE, {});
  return { ...questionnaireSeed, ...stored };
}

/** Answers saved only from the form (excludes repo seed defaults). */
export function getStoredQuestionnaireAnswers(): QuestionnaireAnswers {
  return read<QuestionnaireAnswers>(K_QUESTIONNAIRE, {});
}

export function setQuestionnaireAnswers(answers: QuestionnaireAnswers) {
  write(K_QUESTIONNAIRE, answers);
}

export function patchQuestionnaireAnswer(
  id: string,
  value: string | boolean
) {
  const next = { ...getQuestionnaireAnswers(), [id]: value };
  setQuestionnaireAnswers(next);
  return next;
}

export function clearQuestionnaireAnswers() {
  write(K_QUESTIONNAIRE, {});
}
