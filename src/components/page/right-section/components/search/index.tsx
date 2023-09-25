const Search = () => {
  return (
    <div className="w-full h-16 pl-16 flex items-end justify-between">
      <Input />
      <button className="w-16 h-16 bg-orange-500 flex items-center justify-center">
        <img width={20} height={20} src="/search-outline.svg" />
      </button>
    </div>
  );
};

const Input = () => {
  return <input type="text" className="w-3/4 bg-transparent border-b outline-none border-white text-white text-lg"/>;
};

export default Search;
