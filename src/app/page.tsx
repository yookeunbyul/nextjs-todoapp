export default function Home() {
  return (
    <main>
      <div className="w-full bg-indigo-50 text-center min-h-screen">
        <h1 className="text-5xl font-bold pt-10 pb-5">Hello Todo App!</h1>
        <div className="p-10">
          <input
            className="w-5/6 placeholder:text-gray-400 border-0 p-5 rounded-l-lg focus:outline-none"
            placeholder="your todo here"
          />
          <button className="w-1/6 bg-indigo-200 rounded-r-lg p-5">
            Submit!
          </button>
        </div>
      </div>
    </main>
  );
}
