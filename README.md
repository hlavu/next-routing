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

4. Nested dynamic routes: 

localhost:3000/product/:productId/review/:reviewId

<pre>
pages
  |- index.tsx: localhost:3000/
  |- product
      |- index.tsx: localhost:3000/product
      |- [productId]
           |- index.tsx: localhost:3000/product/1
           |- review
               |- index.tsx: localhost:3000/product/1/review
               |- [reviewId].tsx: localhost:3000/product/1/review/1
</pre>

5. Catch all routes: adds three dots inside square brackets to create catch all routes.

- Purpose: use for different URLs for the same page layout or use for pages with optional route parameters.

<pre>
pages
  |- index.tsx: localhost:3000/
  |- docs
      |- [...param].tsx: will catch all routes after docs/ but does not catch docs/
            localhost:3000/docs -> 404 error
            localhost:3000/docs/1/2/3
            localhost:3000/docs/first/second/3
            ...
      |- [[...param]].tsx: will catch all routes after docs/ AND docs/ itself

</pre>

