## About

Minimal decorator to use within Storybook/react to inject a script tag in the story file.

Specially useful to load a script for a web component.

The tag is deleted on unmount.

<!-- GETTING STARTED -->

## Getting Started

```javascript
// component.stories.tsx
import { injectScript } from 'storybook-inject-script';
...

export const SomeComponentStory = () => <Component />

SomeComponentStory.decorators = [injectScript("https://some-url-to-your-script.js")];
```

### Prerequisites

- React 16.8 or higher
- @storybook/react v6.0 or higher

* npm
  ```sh
  npm install storybook-inject-script
  ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>