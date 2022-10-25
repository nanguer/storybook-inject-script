import React, { type ComponentType, useLayoutEffect } from "react";

/**
 * decorator to inject (web-component) scripts to the Story
 * the script will be appended to body on mount,
 * on unmount the script is removed
 * @param url path to script
 * @returns decorated story with appended script
 */
export const injectScript =
  (url: string) => (DecoratedStory: ComponentType) => {
    useLayoutEffect(() => {
      const scriptEl = document.createElement("script");
      scriptEl.setAttribute("defer", "defer");
      scriptEl.setAttribute("src", url);
      scriptEl.setAttribute("type", "application/javascript");
      document.body.appendChild(scriptEl);

      return () => {
        document.body.removeChild(scriptEl);
      };
    }, []);

    return <DecoratedStory />;
  };
