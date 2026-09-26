type Props = { eyebrow: string; title: string; lead: string };
export default function PageIntro({ eyebrow, title, lead }: Props) {
  return (
    <header className="border-b border-border bg-surface py-16 md:py-24">
      <div className="page-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[1.17]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-muted-foreground">
          {lead}
        </p>
      </div>
    </header>
  );
}
