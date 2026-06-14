"use client";

import type { QuestionField, QuestionnaireAnswers } from "@/content/questionnaire/types";

type QuestionnaireFieldProps = {
  field: QuestionField;
  value: string | boolean | undefined;
  onChange: (id: string, value: string | boolean) => void;
};

export function QuestionnaireField({
  field,
  value,
  onChange,
}: QuestionnaireFieldProps) {
  if (field.type === "checkbox") {
    const checked = value === true;
    return (
      <label className="questionnaire-check">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(field.id, e.target.checked)}
        />
        <span>{field.label}</span>
      </label>
    );
  }

  const stringValue = typeof value === "string" ? value : "";
  const compactLabel = field.type === "table-row" ? field.column : field.label;

  if (field.type === "textarea") {
    return (
      <div className="questionnaire-field-card">
        <label htmlFor={field.id} className="questionnaire-label">
          {field.label}
        </label>
        {field.hint && <p className="questionnaire-hint">{field.hint}</p>}
        <textarea
          id={field.id}
          rows={field.rows ?? 3}
          value={stringValue}
          placeholder={field.placeholder ?? "Type your answer…"}
          onChange={(e) => onChange(field.id, e.target.value)}
          className="questionnaire-input questionnaire-textarea"
        />
      </div>
    );
  }

  return (
    <div className={field.type === "table-row" ? "questionnaire-field" : "questionnaire-field-card"}>
      <label htmlFor={field.id} className="questionnaire-label">
        {compactLabel}
      </label>
      <input
        id={field.id}
        type="text"
        value={stringValue}
        placeholder={field.placeholder ?? "Type your answer…"}
        onChange={(e) => onChange(field.id, e.target.value)}
        className="questionnaire-input"
      />
    </div>
  );
}

export function FrameScenarioGroup({
  stem,
  fields,
  answers,
  onChange,
}: {
  stem: string;
  fields: QuestionField[];
  answers: QuestionnaireAnswers;
  onChange: (id: string, value: string | boolean) => void;
}) {
  return (
    <div className="questionnaire-frame-group">
      <p className="questionnaire-frame-stem">{stem}</p>
      <div className="questionnaire-frame-grid">
        {fields.map((field) => (
          <QuestionnaireField
            key={field.id}
            field={field}
            value={answers[field.id]}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
