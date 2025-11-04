# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Custom HTTPS certificates

If your upstream APIs use a self-signed or private certificate authority, expose the certificate file to Node.js with the `NUXT_CUSTOM_CA_CERT_PATH` environment variable. The path can be absolute or relative to the project root. Example on Windows PowerShell:

```powershell
$env:NUXT_CUSTOM_CA_CERT_PATH="./auxiliary/localhost.pem"; npm run dev
```

The certificate is loaded once at server start and reused for all server-side `$fetch` calls.
