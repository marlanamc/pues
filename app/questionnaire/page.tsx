import { QuestionnaireForm } from "@/components/questionnaire/QuestionnaireForm";

export const metadata = {
  title: "Profile questionnaire · Pues",
  description: "Fill in your life context to personalize Pues content.",
};

export default function QuestionnairePage() {
  return (
    <div className="lg:mx-auto lg:max-w-[640px]">
      <QuestionnaireForm />
    </div>
  );
}
