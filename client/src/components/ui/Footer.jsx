const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex justify-center bg-indigo-200">
      <div className="w-full max-w-7xl px-4 py-2 pb-4 text-right text-sm font-medium md:p-6 md:pt-4">
        Copyright &#169;{" "}
        <a
          href="https://github.com/CKBoytGT/projeCritter/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          projeCritter team
        </a>{" "}
        2023-{year}
      </div>
    </footer>
  );
};

export default Footer;
