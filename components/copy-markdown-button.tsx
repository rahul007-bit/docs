'use client';

import { Copy, Check } from 'lucide-react';
import { useState, useCallback } from 'react';

interface CopyMarkdownButtonProps {
  markdown: string;
}

export function CopyMarkdownButton({ markdown }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [markdown]);

  return (
    <div className="flex justify-end mb-4">
      <button
        type="button"
        onClick={handleCopy}
        disabled={copied}
        className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-background px-2.5 py-1.5 text-xs text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        title="Copy page as Markdown"
      >
        {copied ? (
          <>
            <Check className="size-3.5" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="size-3.5" />
            <span>Copy Markdown</span>
          </>
        )}
      </button>
    </div>
  );
}
