const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center grow w-full h-full">
      <h2 className="text-9xl text-indigo-650 font-bold drop-shadow-[0.5rem_0.5rem_#bbf7d0]">
        404
      </h2>
      <p className="font-medium">
        <strong>Error:</strong> We couldn{"'"}t find the page you
        {"'"}re looking for.
      </p>
      <p>
        <a href="/" className="font-bold hover:underline uppercase">
          « Back to homepage
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
