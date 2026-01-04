import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
        Ops Docs
      </h1>
      <p className="text-fd-muted-foreground text-lg mb-8 max-w-xl">
        Your central hub for operations documentation — databases, infrastructure, networking, DevOps, and systems administration.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-2.5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          Get Started
        </Link>
        <Link
          href="/docs/intro"
          className="inline-flex items-center justify-center rounded-md border border-fd-border px-6 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
        >
          How to Contribute
        </Link>
      </div>
    </div>
  );
}
