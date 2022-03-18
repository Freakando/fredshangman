import React, { Component } from "react";
import { ThemeContext } from "../src/contexts/ThemeContext";

class TestComponent extends Component {
  // static contextType = ThemeContext;
  render() {
    // console.log(this.context);

    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <>
              <h1 style={{ background: theme.ui, color: theme.syntax }}>
                Fred is going to be an amazing JS developer!
              </h1>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TestComponent;
