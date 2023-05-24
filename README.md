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

<pre>
pages
  |- index.tsx: localhost:3000/
  |- admin.tsx: localhost:3000/admin
  |- about.tsx: localhost:3000/about
</pre>

2. Nested routes: Nested folder structure, files will be automatically routed in the same way in URL.

<pre>
pages
  |- index.tsx: localhost:3000/
  |- admin.tsx: localhost:3000/admin
  |- about.tsx: localhost:3000/about
  |- user
      |- index.tsx: localhost:3000/user
      |- first.tsx: localhost:3000/user/first
      |- second.tsx: localhost:3000/user/second
</pre>
  

3. Dynamics routes: Can be created by adding square brackets to a page name.

- useRouter hook: `useRouter().query.bookId` to get `bookId` param

<pre>
pages
  |- index.tsx: localhost:3000/
  |- user
      |- index.tsx: localhost:3000/user
      |- first.tsx: localhost:3000/user/first
  |- book
      |- index.tsx: localhost:3000/book
      |- [bookId].tsx: localhost:3000/book/:bookId  
         * bookId can be any type such as number, string
</pre>

