"use client";

import { useRouter } from "next/navigation";
import { SettingsMenuButton } from "@/components/SettingsMenu";
import { LaLineaGame } from "@/components/LaLineaGame";

export default function LaLineaPage() {
  const router = useRouter();

  return (
    <div className="space-y-5 lg:w-full lg:max-w-4xl">
      <header className="flex items-center justify-end">
        <SettingsMenuButton />
      </header>

      <LaLineaGame onQuit={() => router.push("/practice")} />
    </div>
  );
}
