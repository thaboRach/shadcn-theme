import { useContext } from "react";
import { Switch } from "./components/Switch";
import { Button } from "./components/Button";
import { THEME, ThemeContext } from "./ThemeProvider";
import { cn } from "./utils";

function App() {
  const { setTheme, theme } = useContext(ThemeContext);

  const mainContainerClass = cn({
    ["flex flex-col items-center justify-center w-full min-h-screen gap-4 bg-background"]:
      true,
    ["bg-foreground"]: theme == THEME.dark,
  });

  const titleClass = cn({
    ["text-5xl font-bold text-secondary-foreground"]: true,
    ["text-primary-foreground"]: theme === THEME.dark,
  });

  const themeTextClass = cn({
    ["text-xl text-secondary-foreground"]: true,
    ["text-primary-foreground"]: theme === THEME.dark,
  });

  return (
    <main className={mainContainerClass}>
      <div className="flex flex-col items-center gap-y-2 absolute top-0 right-0 my-4 mx-6">
        <p className={themeTextClass}>Theme</p>
        <Switch
          onCheckedChange={() =>
            setTheme((prevTheme) =>
              prevTheme === THEME.light ? THEME.dark : THEME.light
            )
          }
        />
      </div>
      <h1 className={titleClass}>Hello world!</h1>
      <div className="flex gap-4">
        <Button variant="default" size="lg">
          Click me!
        </Button>
        <Button variant="secondary">Click me!</Button>
      </div>
    </main>
  );
}

export default App;
