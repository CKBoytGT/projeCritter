const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-indigo-200 flex justify-center">
      <div className="max-w-7xl w-full px-4 py-2 pb-4 md:p-6 md:pt-4 text-right text-sm font-medium">
        Copyright &#169;{" "}
        <a
          href="https://github.com/CKBoytGT/projeCritter/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-bold"
        >
          projeCritter team
        </a>{" "}
        2023-{year}
      </div>
    </footer>
  );
};

export default Footer;
