"use client";

import { useRouter } from "next/navigation";
import { MarcadoresGame } from "@/components/MarcadoresGame";

export default function MarcadoresPage() {
  const router = useRouter();

  return (
    <div className="space-y-5 lg:w-full lg:max-w-4xl">
      <MarcadoresGame onQuit={() => router.push("/mas")} />
    </div>
  );
}
