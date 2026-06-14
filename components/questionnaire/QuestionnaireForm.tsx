"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  completedSectionSummaries,
  countAnsweredFields,
  formatQuestionnaireExport,
  questionnaireSections,
} from "@/content/questionnaire/export";
import type {
  QuestionField,
  QuestionnaireAnswers,
  QuestionSection,
} from "@/content/questionnaire/types";
import {
  FrameScenarioGroup,
  QuestionnaireField,
} from "@/components/questionnaire/QuestionnaireField";
import {
  getQuestionnaireAnswers,
  setQuestionnaireAnswers,
} from "@/lib/questionnaireStore";
import { copyText, downloadTextFile } from "@/lib/copyText";

function groupFrameFields(fields: QuestionField[]) {
  const groups = new Map<string, QuestionField[]>();
  for (const field of fields) {
    const existing = groups.get(field.label) ?? [];
    existing.push(field);
    groups.set(field.label, existing);
  }
  return [...groups.entries()];
}

function QuestionnaireSectionBlock({
  section,
  answers,
  onChange,
  showPartLabel = true,
}: {
  section: QuestionSection;
  answers: QuestionnaireAnswers;
  onChange: (id: string, value: string | boolean) => void;
  showPartLabel?: boolean;
}) {
  const isFrames = section.id === "frames";
  const checkboxFields = section.fields.filter((f) => f.type === "checkbox");
  const textFields = section.fields.filter(
    (f) => f.type !== "checkbox" && f.type !== "table-row"
  );
  const frameGroups = isFrames ? groupFrameFields(section.fields) : [];

  return (
    <section id={section.id} className="questionnaire-section">
      <div className="questionnaire-section__head">
        {showPartLabel && (
          <p className="mono-cap text-accent">{section.part}</p>
        )}
        <h2 className="questionnaire-section__title">{section.title}</h2>
        {section.description && (
          <p className="questionnaire-section__desc">{section.description}</p>
        )}
      </div>

      <div className="questionnaire-section__body">
        {isFrames ? (
          frameGroups.map(([stem, fields]) => (
            <FrameScenarioGroup
              key={stem}
              stem={stem}
              fields={fields}
              answers={answers}
              onChange={onChange}
            />
          ))
        ) : (
          <>
            {checkboxFields.length > 0 && (
              <div className="questionnaire-check-group">
                {checkboxFields.map((field) => (
                  <QuestionnaireField
                    key={field.id}
                    field={field}
                    value={answers[field.id]}
                    onChange={onChange}
                  />
                ))}
              </div>
            )}
            {textFields.map((field) => (
              <QuestionnaireField
                key={field.id}
                field={field}
                value={answers[field.id]}
                onChange={onChange}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

function groupSectionsByPart(sections: QuestionSection[]) {
  const groups: { part: string; sections: QuestionSection[] }[] = [];
  for (const section of sections) {
    const last = groups[groups.length - 1];
    if (last?.part === section.part) {
      last.sections.push(section);
    } else {
      groups.push({ part: section.part, sections: [section] });
    }
  }
  return groups;
}

export function QuestionnaireForm() {
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [hydrated, setHydrated] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle"
  );
  const [showPreview, setShowPreview] = useState(false);
  const [saveFlash, setSaveFlash] = useState(false);

  useEffect(() => {
    setAnswers(getQuestionnaireAnswers());
    setHydrated(true);

    function sync() {
      setAnswers(getQuestionnaireAnswers());
    }

    window.addEventListener("pues:questionnaire-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("pues:questionnaire-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const onChange = useCallback((id: string, value: string | boolean) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      setQuestionnaireAnswers(next);
      return next;
    });
    setSaveFlash(true);
    window.setTimeout(() => setSaveFlash(false), 1200);
  }, []);

  const progress = useMemo(() => countAnsweredFields(answers), [answers]);
  const exportText = useMemo(
    () => formatQuestionnaireExport(answers),
    [answers]
  );
  const partGroups = useMemo(
    () => groupSectionsByPart(questionnaireSections),
    []
  );

  async function copyExport() {
    const ok = await copyText(exportText);
    setCopyState(ok ? "copied" : "error");
    window.setTimeout(() => setCopyState("idle"), 2500);
  }

  function downloadExport() {
    const date = new Date().toISOString().slice(0, 10);
    downloadTextFile(exportText, `pues-profile-${date}.md`);
  }

  return (
    <div style={{ opacity: hydrated ? 1 : 0.6 }}>
      <header className="questionnaire-header">
        <Link
          href="/settings"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Settings
        </Link>
        <p className="text-caption text-ink-mute">Content profile</p>
        <span className="w-12" aria-hidden />
      </header>

      <div className="questionnaire-intro">
        <h1 className="text-display-lg text-ink">Your notebook profile.</h1>
        <p className="text-gloss">
          Answer in plain English — your replies become speak prompts and
          situation phrasebanks. You don&apos;t need to finish everything;
          partial answers export fine.
        </p>
        <div className="questionnaire-status">
          <p className="mono-cap text-ink-mute">
            {progress.answered} of {progress.total} fields filled
          </p>
          <p
            className="mono-cap questionnaire-status__saved"
            style={{ color: saveFlash ? "var(--accent)" : "var(--ink-mute)" }}
          >
            {saveFlash ? "Saved on this device" : "Auto-saves on this device"}
          </p>
        </div>
      </div>

      <aside className="tip-card questionnaire-done-card">
        <span className="mono-cap tip-card__label">Already answered</span>
        <ul className="questionnaire-done-list">
          {completedSectionSummaries.map((item) => (
            <li key={item.title}>
              <span className="text-ink">{item.title}</span>
              <span className="text-ink-mute"> · {item.note}</span>
            </li>
          ))}
        </ul>
      </aside>

      <nav className="questionnaire-jump" aria-label="Sections">
        {questionnaireSections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="questionnaire-jump__link">
            {section.title}
          </a>
        ))}
      </nav>

      <div className="questionnaire-sections">
        {partGroups.map((group) => (
          <div key={group.part} className="questionnaire-part">
            <p className="mono-cap questionnaire-part__label">{group.part}</p>
            {group.sections.map((section) => (
              <QuestionnaireSectionBlock
                key={section.id}
                section={section}
                answers={answers}
                onChange={onChange}
                showPartLabel={false}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="questionnaire-export">
        <div className="questionnaire-export__head">
          <p className="mono-cap">Export for AI</p>
          <p className="questionnaire-export__desc">
            Your answers stay in this browser. When you&apos;re ready, copy or
            download only what you&apos;ve filled in — no need to complete the
            whole form.
          </p>
        </div>

        <div className="questionnaire-export__actions">
          <button type="button" onClick={copyExport} className="btn-primary">
            <span className="lab">
              {copyState === "copied"
                ? "Copied — paste into chat"
                : copyState === "error"
                  ? "Copy failed — use download"
                  : "Copy to clipboard"}
            </span>
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          </button>

          <button
            type="button"
            onClick={downloadExport}
            className="questionnaire-export__secondary"
          >
            Download .md file
          </button>

          <button
            type="button"
            onClick={() => setShowPreview((v) => !v)}
            className="questionnaire-export__secondary"
            aria-expanded={showPreview}
          >
            {showPreview ? "Hide preview" : "Preview export"}
          </button>
        </div>

        {showPreview && (
          <div className="questionnaire-export__preview-wrap">
            <textarea
              readOnly
              value={exportText}
              aria-label="Export preview"
              className="questionnaire-export__preview"
              onFocus={(e) => e.currentTarget.select()}
            />
            <p className="questionnaire-export__preview-note">
              {exportText.length.toLocaleString()} characters · only answered
              sections are included
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
