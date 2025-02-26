const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex items-center justify-between bg-gray-1 p-4 border-b border-[#F1E6FD] border-opacity-20 h-20" aria-label="Cabeçalho do site">
      {children}
    </header>
  );
};

export { Root };
