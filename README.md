# SvelteKit Monorepo Template

A template monorepo for SvelteKit applications using [pnpm](https://pnpm.io/).

## Project Structure

| Directories | Description                              |
| :---------- | :--------------------------------------- |
| `apps/`     | The main applications                    |
| `packages/` | Shared packages used by the applications |

## Getting Started

This project uses [pnpm](https://pnpm.io/) as the package manager. Make sure you have it installed globally:

```bash
npm install -g pnpm
```

## Install dependencies

```bash
pnpm install
```

## Develop

```bash
pnpm dev
```

## Build all packages and apps

```bash
pnpm build
```

## Scripts

- `pnpm build` – Build all apps and packages
- `pnpm check` - Check all packages for type issues
- `pnpm dev` – Start development servers for the website
- `pnpm format` - Format all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm test:unit` – Run unit tests

## Environment

Copy `.env.example` to `.env.development` or `.env.production` and fill in required values.

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes
4. Push to the branch (`git push origin feature/fooBar`)
5. Open a pull request

## License

[MIT](LICENSE.md)
