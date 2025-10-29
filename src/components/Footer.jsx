function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-[#e0afa0] font-bold py-4 mt-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2">
        <div className="text-xl text-center sm:text-left">
          &copy; {year} Ark's PM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
