interface ProjectMockupProps {
  variant: "bordeaux" | "blue";
}

/**
 * Mockup abstrait d'interface (fenêtre de navigateur stylisée) utilisé tant
 * qu'on n'a pas de vraies captures d'écran des projets. Pas de fausse promesse
 * visuelle : juste une composition sobre qui suggère "produit" plutôt que "texte".
 */
export default function ProjectMockup({ variant }: ProjectMockupProps) {
  const accent = variant === "bordeaux" ? "var(--color-bordeaux)" : "var(--color-blue)";
  const accentSoft = variant === "bordeaux" ? "var(--color-bordeaux-soft)" : "var(--color-blue-soft)";

  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      {/* Fenêtre */}
      <rect x="0" y="0" width="320" height="180" rx="10" fill="var(--color-smoke-dim)" />
      {/* Barre de titre */}
      <rect x="0" y="0" width="320" height="22" rx="10" fill="var(--color-surface)" />
      <circle cx="16" cy="11" r="3" fill={accentSoft} />
      <circle cx="28" cy="11" r="3" fill="var(--color-ink)" opacity="0.15" />
      <circle cx="40" cy="11" r="3" fill="var(--color-ink)" opacity="0.15" />

      {/* Barre latérale */}
      <rect x="14" y="36" width="60" height="8" rx="4" fill={accent} opacity="0.7" />
      <rect x="14" y="52" width="44" height="6" rx="3" fill="var(--color-ink)" opacity="0.15" />
      <rect x="14" y="66" width="50" height="6" rx="3" fill="var(--color-ink)" opacity="0.15" />
      <rect x="14" y="80" width="38" height="6" rx="3" fill="var(--color-ink)" opacity="0.15" />

      {/* Bloc principal */}
      <rect x="90" y="36" width="216" height="56" rx="8" fill="var(--color-surface)" />
      <rect x="104" y="48" width="120" height="8" rx="4" fill={accent} opacity="0.5" />
      <rect x="104" y="64" width="160" height="6" rx="3" fill="var(--color-ink)" opacity="0.12" />
      <rect x="104" y="76" width="90" height="6" rx="3" fill="var(--color-ink)" opacity="0.12" />

      {/* Cartes en bas */}
      <rect x="90" y="102" width="100" height="60" rx="8" fill="var(--color-surface)" />
      <rect x="104" y="114" width="70" height="8" rx="4" fill={accentSoft} />
      <rect x="104" y="130" width="55" height="6" rx="3" fill="var(--color-ink)" opacity="0.12" />

      <rect x="200" y="102" width="106" height="60" rx="8" fill="var(--color-surface)" />
      <rect x="214" y="114" width="70" height="8" rx="4" fill={accentSoft} />
      <rect x="214" y="130" width="60" height="6" rx="3" fill="var(--color-ink)" opacity="0.12" />
    </svg>
  );
}
