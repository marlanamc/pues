export type FieldType =
  | "text"
  | "textarea"
  | "numbered"
  | "checkbox"
  | "table-row";

export type QuestionField = {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  hint?: string;
  rows?: number;
  /** For numbered lists — how many inputs to show. */
  count?: number;
  /** For table-row fields — column header shown above the input. */
  column?: string;
};

export type QuestionSection = {
  id: string;
  part: string;
  title: string;
  description?: string;
  fields: QuestionField[];
};

export type QuestionnaireAnswers = Record<string, string | boolean>;
