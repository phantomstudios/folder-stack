This is a small [Next.js](https://nextjs.org/) fullstack app that allows you to specify a local folder of images (PNGs) to watch, and an accompanying frontend application displaying these images in a simple but slick vertical list.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

You can configure a few things by editing the file `src/config/index.tsx`.

- `DIR` - The directory to watch.
- `MAX_IMAGES` - How many images to request. Default 10.
- `POLL_INTERVAL` - How often should the frontend look for updates. Default 5 seconds.
- `FILE_EXTENSION` - The filetypes supported. Default `png`.
- `FILE_MIME` - The file mime type. Default `image/png`.
- `SHOW_TITLE` - If the title should be overlaid. Default `false`.
- `DISABLE_SCROLL` - Should the user be able to scroll? Default `true`.
- `STACK_TRANSFORM` - How the stack should be positioned on the page. Default shown below.

```ts
export const STACK_TRANSFORM = {
  x: "100%",
  y: 0,
  width: 256,
  height: 1265,
  rotation: 90,
};
```

You can also adjust the title field formatter here: `src/utils/images.ts`.
