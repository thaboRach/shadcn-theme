import { Button } from "./components/ui/button";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-4">
      <h1 className="text-5xl font-bold">Hello world!</h1>
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
