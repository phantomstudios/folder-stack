This is a small [Next.js](https://nextjs.org/) fullstack app that allows you to specify a local folder of images (PNGs) to watch, and an accompanying frontend application displaying these images in a simple yet elegant vertical list.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

You can configure a few things by editing the file `src/config/index.ts`.

- `ROOT_DIRECTORY` - The directory to watch. Can be absolute or relative to the project root
- `RECURSIVE` - Should we scan recursively within folders. Default is `true`.
- `MAX_IMAGES` - How many images to request. Default `8`.
- `POLL_INTERVAL` - How often should the frontend look for updates. Default 5 seconds.
- `RETRY_INTERVAL` - How frequently should the frontend retry polling on failure.
- `FILE_EXTENSIONS` - The filetypes supported. Default `["jpg", "jpeg", "png", "gif"]`.
- `SHOW_TITLE` - If the title should be overlaid. Default `false`.
- `DISABLE_SCROLL` - Should the user be able to scroll? Default `true`.
- `STACK_STYLE` - How the stack should be transformed on the page using regular `CSSProperties`.
