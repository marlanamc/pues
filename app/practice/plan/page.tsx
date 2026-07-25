import { redirect } from "next/navigation";

/**
 * El plan lives inside La semana now — the same days, grouped by week instead
 * of listed 182 deep (content/CURRICULUM.md flagged that the flat selector
 * wouldn't scale past a season).
 */
export default function PlanPage() {
  redirect("/semana");
}
