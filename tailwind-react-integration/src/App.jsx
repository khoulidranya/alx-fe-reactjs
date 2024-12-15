export default function App() {
  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold">Tailwind Dark Mode</h1>
      <button
        onClick={toggleDarkMode}
        className="mt-4 px-4 py-2 bg-blue-500 dark:bg-yellow-500 text-white rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
