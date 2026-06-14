import Link from "next/link";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import { AudioSpeedToggle } from "@/components/AudioSpeedToggle";
import { SidebarToggle } from "@/components/SidebarToggle";

export default function SettingsPage() {
  return (
    <div className="space-y-8 lg:mx-auto lg:max-w-[640px]">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Today
        </Link>
        <p className="text-caption text-ink-mute">Settings</p>
        <span className="w-12" aria-hidden />
      </header>

      <section className="space-y-2">
        <h1 className="text-display-lg text-ink">Settings.</h1>
        <p className="text-gloss">Small preferences for how the app looks and sounds.</p>
      </section>

      <ul className="space-y-4">
        <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <p className="font-display text-[1.125rem] text-ink leading-tight">
                Theme
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                Day for light surroundings, Night for low light.
              </p>
            </div>
            <ThemeModeToggle />
          </div>
        </li>

        <li className="rounded-lg border border-rule bg-surface p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <p className="font-display text-[1.125rem] text-ink leading-tight">
                Audio speed
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                Slow plays pronunciation at a gentler pace for shadowing.
              </p>
            </div>
            <AudioSpeedToggle />
          </div>
        </li>

        <li className="hidden rounded-lg border border-rule bg-surface p-6 space-y-4 lg:block">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <p className="font-display text-[1.125rem] text-ink leading-tight">
                Sidebar
              </p>
              <p className="text-sm text-ink-mute leading-relaxed">
                Hide the left navigation on wide screens for a quieter, wider
                reading view. The bottom tabs stay available.
              </p>
            </div>
            <SidebarToggle />
          </div>
        </li>
      </ul>

      <div className="rounded-lg border border-dashed border-rule p-6 text-center">
        <p className="text-caption text-ink-mute">More settings coming.</p>
      </div>
    </div>
  );
}
