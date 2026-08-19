"use client";

import { useRouter } from "next/navigation";
import { LaLineaGame } from "@/components/LaLineaGame";

export default function LaLineaPage() {
  const router = useRouter();

  return (
    <div className="space-y-5 lg:mx-auto lg:w-full lg:max-w-4xl">
      <LaLineaGame onQuit={() => router.push("/mas")} />
    </div>
  );
}
