"use client";

import * as React from "react";
import { Link2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function isValidHttpUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function UrlVideoForm() {
  const [url, setUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [done, setDone] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setDone(false);

    const trimmed = url.trim();
    if (!trimmed) {
      setError("Indiquez une URL.");
      return;
    }
    if (!isValidHttpUrl(trimmed)) {
      setError("URL invalide (https://…)");
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 2800));
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="relative min-w-0 flex-1">
            <Link2
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder="https://www.exemple.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
              className={cn(
                "h-11 rounded-xl border-white/10 bg-white/5 pl-10 text-base md:text-sm",
                "placeholder:text-muted-foreground/80"
              )}
              aria-invalid={!!error}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="h-11 shrink-0 rounded-xl px-6 sm:min-w-[9.5rem]"
            variant={loading ? "secondary" : "default"}
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Génération…
              </>
            ) : (
              "Générer la vidéo"
            )}
          </Button>
        </div>
        {error ? (
          <p className="text-center text-sm text-destructive sm:text-left" role="alert">
            {error}
          </p>
        ) : null}
        {done && !error ? (
          <p className="text-center text-sm text-emerald-400/90 sm:text-left">
            Démo : la génération réelle se branchera sur votre API. URL enregistrée.
          </p>
        ) : null}
      </form>
      <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">
        Cela peut prendre 1 à 2 minutes. Merci de patienter…
      </p>
    </div>
  );
}
