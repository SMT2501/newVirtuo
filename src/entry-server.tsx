import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "node:stream";
import App from "./App";
import { SeoCapture, type SeoProps } from "./components/Seo";

export function render(path: string): Promise<{ html: string; seo: SeoProps }> {
  return new Promise((resolve, reject) => {
    let html = "";
    let seo: SeoProps | undefined;
    let error: unknown;
    const output = new Writable({
      write(chunk, _encoding, done) { html += chunk.toString(); done(); },
    });
    output.on("error", reject);
    output.on("finish", () => {
      if (error) reject(error);
      else if (!seo) reject(new Error("Missing SEO metadata for " + path));
      else resolve({ html, seo });
    });
    const stream = renderToPipeableStream(
      <SeoCapture.Provider value={(props) => { seo = props; }}><App ssrPath={path} /></SeoCapture.Provider>,
      {
        onAllReady() { stream.pipe(output); },
        onError(cause) { error = cause; },
        onShellError: reject,
      },
    );
  });
}
