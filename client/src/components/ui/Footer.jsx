const Footer = () => {
  return (
    <footer className="bg-indigo-200 flex justify-center">
      <div className="max-w-7xl w-full px-6 py-2 text-right text-sm font-medium">
        Copyright &#169;{" "}
        <a
          href="https://github.com/BJThompson12/projeCritter/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-bold"
        >
          projeCritter team
        </a>{" "}
        2023-2024
      </div>
    </footer>
  );
};

export default Footer;
