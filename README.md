# Ops Docs

Internal operations documentation covering databases, infrastructure, networking, DevOps, systems administration, and incident response.

Built with [Fumadocs](https://fumadocs.dev) and [Next.js](https://nextjs.org).

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun dev
```

Open http://localhost:3000 to view the docs.

## Documentation Structure

```
content/docs/
├── databases/          # PostgreSQL, MySQL, Redis, Kafka
├── infra/              # Kubernetes, Storage
├── networking/         # DNS, Ingress, Load Balancers
├── devops/             # Jenkins, CI/CD
├── systems/            # Linux administration
└── incident-response/  # Runbooks, post-mortems
```

Each section contains:
- **runbooks/** - Step-by-step operational procedures
- **how-to/** - Task-oriented guides
- **reference/** - Configuration and command references
- **troubleshooting/** - Common issues and solutions

## Features

- 🎨 **Theme Selector** - 5 color themes (Ocean, Purple, Neutral, Catppuccin, Vitepress)
- 📋 **Copy Markdown** - Copy page content as markdown
- 🔍 **Full-text Search** - Search across all documentation
- 📱 **Responsive** - Works on desktop and mobile

## Adding Documentation

1. Create an `.mdx` file in the appropriate `content/docs/` folder
2. Add frontmatter with `title` and `description`
3. Update the section's `meta.json` if needed

Example:

```mdx
---
title: My Guide
description: A helpful guide
---

# My Guide

Content goes here...
```

## Project Structure

| Path | Description |
|------|-------------|
| `app/(home)` | Landing page |
| `app/docs` | Documentation layout and pages |
| `content/docs` | MDX documentation files |
| `components/` | Custom React components |
| `lib/source.ts` | Content source configuration |

## Learn More

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com)
