function SearchSavedBox({ saved }) {
  return (
    <div className="mx-4 mt-20 sm:mx-8 lg:mx-16">
      <div className="bg-light py-7 text-center md:py-12">
        <h1 className="mb-3 text-xl font-bold">Saved Products</h1>
        <p className="text-xs">{saved.length} Saved</p>
      </div>
    </div>
  );
}

export default SearchSavedBox;
