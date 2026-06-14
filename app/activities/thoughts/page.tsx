import { redirect } from "next/navigation";

// The journal now lives at /thoughts (the Diario tab).
export default function ThoughtsRedirect() {
  redirect("/thoughts");
}
