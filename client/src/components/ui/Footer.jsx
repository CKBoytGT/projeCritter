const Footer = () => {
  return (
    <footer className="bg-black flex justify-center">
      <div className="max-w-7xl w-full p-6 pt-4  text-white text-right text-sm">
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
