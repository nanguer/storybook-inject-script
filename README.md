## About

Minimal decorator to use within Storybook/react to inject a script tag in the story file.

Specially useful to load a script for a web component.

The tag is deleted on unmount.

<!-- GETTING STARTED -->

## Getting Started

The decorator takes the src URL as first mandatory argument, and an optional second object for the rest of the HTMLScriptElement options:

```javascript
// component.stories.tsx
import { injectScript } from 'storybook-inject-script';
...

export const SomeComponentStory = () => <Component />

SomeComponentStory.decorators = [injectScript("https://some-url-to-your-script.js", {containerId: "some-element", htmlFor: "foo")];
```

### Prerequisites

- React 16.8 or higher
- @storybook/react v6.0 or higher

* npm
  ```sh
  npm install storybook-inject-script
  ```

## Options

See https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement.

By default, script loads with the following attributes:

- _defer_
- _type_ _"application/javascript"_

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
