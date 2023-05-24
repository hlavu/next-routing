# Next Routing Documentation

## Host project locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Notes:

1. Next.js has file/page based routing mechanism.

pages
  |- index.tsx: localhost:3000/
  |- admin.tsx: localhost:3000/admin
  |- about.tsx: localhost:3000/about

2. Nested routes

Nested folder structure, files will be automatically routed in the same way in URL

pages
  |- index.tsx: localhost:3000/
  |- admin.tsx: localhost:3000/admin
  |- about.tsx: localhost:3000/about
  |- user
      |- index.tsx: localhost:3000/user
      |- first.tsx: localhost:3000/user/first
      |- second.tsx: localhost:3000/user/second

