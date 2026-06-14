import { completedProfile } from "@/content/questionnaire/profile";
import {
  questionnaireSections,
  completedSectionSummaries,
} from "@/content/questionnaire/sections";
import type { QuestionnaireAnswers } from "@/content/questionnaire/types";

const AI_INSTRUCTION =
  "Using my answers below, generate Pues content: Latin American Spanish, tú-form, pan-Hispanic vocabulary. For each item give: english, spanish, why (with *asterisks* on the Spanish word being explained), optional wordHints, and a short situationLabel. Match the tone of content/prompts.ts — real life, warm, speak-first.";

function block(title: string, lines: readonly string[]): string {
  const body = lines.filter(Boolean);
  if (!body.length) return "";
  return `## ${title}\n${body.join("\n")}`;
}

function sectionAnswers(
  answers: QuestionnaireAnswers,
  sectionId: string
): string[] {
  const section = questionnaireSections.find((s) => s.id === sectionId);
  if (!section) return [];

  return section.fields
    .map((field) => {
      const value = answers[field.id];
      if (field.type === "checkbox") {
        if (value !== true) return "";
        return `- [x] ${field.label}`;
      }
      if (typeof value !== "string" || !value.trim()) return "";
      if (field.type === "table-row") {
        return `${field.label} · ${field.column}: ${value.trim()}`;
      }
      return `${field.label}: ${value.trim()}`;
    })
    .filter(Boolean);
}

export function formatQuestionnaireExport(
  answers: QuestionnaireAnswers
): string {
  const sections: string[] = [
    "# Pues content generation — my profile",
    "",
    AI_INSTRUCTION,
    "",
    block("Context", completedProfile.part1.lines),
    block(
      "Morning routine (already answered)",
      completedProfile.part2Morning.lines
    ),
    block(
      "Feelings (already answered)",
      completedProfile.part7.lines.map((line) => `- ${line}`)
    ),
  ];

  const part2 = questionnaireSections
    .filter((s) => s.part === "Part 2")
    .map((s) => block(s.title, sectionAnswers(answers, s.id)))
    .filter(Boolean)
    .join("\n\n");

  if (part2) {
    sections.push(`## This week — daily life\n\n${part2}`);
  }

  const dynamicBlocks = [
    block("Work", sectionAnswers(answers, "work-esol")),
    block("Family & friends", sectionAnswers(answers, "family")),
    block("Learning & growth", sectionAnswers(answers, "learning")),
    block("Travel & places", sectionAnswers(answers, "travel")),
    block("Food & drink", sectionAnswers(answers, "food")),
    block("Current events & interests", sectionAnswers(answers, "news")),
    block("Dreams & future", sectionAnswers(answers, "dreams")),
    ...["situations-work", "situations-family", "situations-daily"]
      .map((id) => {
        const section = questionnaireSections.find((s) => s.id === id);
        if (!section) return "";
        return block(section.title, sectionAnswers(answers, id));
      })
      .filter(Boolean),
    block("Frame scenarios", sectionAnswers(answers, "frames")),
    block("Vocabulary", sectionAnswers(answers, "vocabulary")),
    block("Quick capture", sectionAnswers(answers, "capture")),
  ].filter(Boolean);

  sections.push(...dynamicBlocks);

  const answeredCount = countAnsweredFields(answers).answered;
  sections.push(
    "",
    "## Generate",
    `- Profile includes ${answeredCount} new form answers from this session.`,
    "- 5 new speak prompts for Day [N] using frames: [list stems]",
    "- Expand these situation slugs with phrases + 2 practiceItems each: [list slugs]",
    "- Add 3 example sentences per frame for Day [N] in frames.ts style"
  );

  return sections.filter(Boolean).join("\n\n");
}

export function countAnsweredFields(answers: QuestionnaireAnswers): {
  answered: number;
  total: number;
} {
  let answered = 0;
  let total = 0;

  for (const section of questionnaireSections) {
    for (const field of section.fields) {
      if (field.type === "checkbox") {
        total += 1;
        if (answers[field.id] === true) answered += 1;
        continue;
      }
      total += 1;
      const value = answers[field.id];
      if (typeof value === "string" && value.trim()) answered += 1;
    }
  }

  return { answered, total };
}

export { completedSectionSummaries, questionnaireSections };
