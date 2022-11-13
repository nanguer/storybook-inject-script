import React, { ComponentType, useLayoutEffect } from "react";

type Options = Partial<Omit<HTMLScriptElement, "src">> & {
  containerId: string;
};

/**
 * decorator to inject (web-component) scripts to the Story
 * the script will be appended to body on mount,
 * on unmount the script is removed
 * @param options atributes to set to the script tag. only "src" is mandatory (path to script)
 * @returns decorated story with appended script
 */
export default (src: string, options?: Options) =>
  (DecoratedStory: ComponentType) => {
    useLayoutEffect(() => {
      const scriptEl = document.createElement("script");
      scriptEl.setAttribute(src, src);
      scriptEl.setAttribute("defer", "defer");
      scriptEl.setAttribute("type", "application/javascript");
      if (options) {
        for (const [key, value] of Object.entries(options)) {
          scriptEl.setAttribute(key, value as any);
        }
        let container = null;
        const { containerId } = options;
        if (containerId !== "") {
          container = document.getElementById(containerId);
          if (container) {
            container.appendChild(scriptEl);
          }
        } else {
          document.body.appendChild(scriptEl);
        }
      }

      return () => {
        document.body.removeChild(scriptEl);
      };
    }, []);

    return <DecoratedStory />;
  };
