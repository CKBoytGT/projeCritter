const NotFoundPage = () => {
  return (
    <div className="flex h-full w-full grow flex-col items-center justify-center">
      <h2 className="text-indigo-650 text-9xl font-bold drop-shadow-[0.5rem_0.5rem_#bbf7d0]">
        404
      </h2>
      <p className="font-medium">
        <strong>Error:</strong> We couldn{"'"}t find the page you
        {"'"}re looking for.
      </p>
      <p>
        <a href="/" className="font-bold uppercase hover:underline">
          « Back to homepage
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
