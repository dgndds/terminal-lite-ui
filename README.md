# Terminal-Lite
## Terminal UI interface component library


### Description

Terminal-lite is a lightweight, customizable terminal UI component library designed for building terminal-like interfaces in web applications. It provides a set of pre-styled components and utilities to create a seamless terminal experience.


### Usage

To use Terminal-lite in your project, follow these steps:

1. **Install the package**: Ensure you have installed the library using:
    ```sh
    npm install terminal-lite
    ```

2. **Import the styles**: Add the following line to your main entry file (e.g., `main.tsx` or `App.tsx`):
    ```javascript
    import 'terminal-lite/css';
    ```

3. **Use the components**: Import and use the components in your React application. For example:

    ```javascript
    import React from 'react';
    import { Terminal } from 'terminal-lite';

    const App = () => {
         return (
              <Terminal title="Your Title" className="your-classes">
                //Place your content here
              </Terminal>
         );
    };

    export default App;
    ```

This example demonstrates how to create a basic terminal interface with a title, header, action buttons, and a body section. You can further customize the styles and structure as needed.

### Customize


#### Part Id's:

- `#terminal-title`: Represents the title section of the terminal interface.
- `#terminal-header`: Represents the header section of the terminal, typically containing controls or title.
- `#terminal-action-btns-container`: A container for the action buttons (e.g., minimize, restore, close) in the terminal header.
- `#terminal-minimize-btn`: Represents the minimize button in the terminal interface.
- `#terminal-restore-btn`: Represents the restore button in the terminal interface, used to resize the terminal to its previous state.
- `#terminal-close-btn`: Represents the close button in the terminal interface, used to close the terminal.
- `#terminal-body`: Represents the main content area of the terminal interface.

#### Customizing IDs Example

You can customize the IDs of the terminal components by overriding the default styles in your CSS file. Here's an example:

```css
/* Custom styles for terminal components */
#terminal-title {
    font-size: 1.5rem;
    color: #00ff00;
}

#terminal-header {
    background-color: #333;
    padding: 10px;
}

#terminal-action-btns-container {
    display: flex;
    gap: 5px;
}

#terminal-minimize-btn,
#terminal-restore-btn,
#terminal-close-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

#terminal-minimize-btn {
    background-color: yellow;
}

#terminal-restore-btn {
    background-color: green;
}

#terminal-close-btn {
    background-color: red;
}

#terminal-body {
    background-color: #000;
    color: #fff;
    padding: 20px;
    font-family: monospace;
}
```

### Credits

Terminal-lite is developed and maintained by Muhammed Doğancan Yılmazoğlu. Special thanks to the open-source community for their contributions and feedback. If you have any suggestions or improvements, feel free to open an issue or contribute to the project on [GitHub](https://github.com/your-repo-link).




