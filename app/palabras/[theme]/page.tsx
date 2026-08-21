import { notFound } from "next/navigation";
import { VocabThemeScreen } from "@/components/VocabThemeScreen";
import { themeBySlug, vocabThemes } from "@/content/vocab";

export function generateStaticParams() {
  return vocabThemes.map((t) => ({ theme: t.slug }));
}

type Params = Promise<{ theme: string }>;

export default async function VocabThemePage({ params }: { params: Params }) {
  const { theme: slug } = await params;
  const theme = themeBySlug(slug);
  if (!theme) notFound();

  return <VocabThemeScreen theme={theme} />;
}
