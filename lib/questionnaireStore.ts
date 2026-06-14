"use client";

import type { QuestionnaireAnswers } from "@/content/questionnaire/types";

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
  } catch {
    /* ignore quota / private mode */
  }
}

export function getQuestionnaireAnswers(): QuestionnaireAnswers {
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
