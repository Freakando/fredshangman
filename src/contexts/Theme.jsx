import { useState, createContext } from "react";

export const ThemeContext = createContext();

const Theme = ({ children, ...props }) => {
  const [dayTime, setDayTime] = useState(true);
  console.log("theme");

  const toggleTheme = () => setDayTime(!dayTime);

  return (
    <ThemeContext.Provider value={{ dayTime, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// class ThemeContextProvider extends Component {
//   state = {
//     isLightTheme: true,
//     light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//     dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
//   };
//   toggleTheme = () => {
//     this.setState({ isLightTheme: !this.state.isLightTheme });
//   };
//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

export default Theme;
