const Search = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-16 pl-14 flex items-end justify-between">
        <Input />
        <Button />
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full pl-14 flex flex-col justify-start">
          {['Chandigarh', 'Mohali',"New York", "Ottawa"].map((item) => {
            return (
              <button key={item} className=" block text-left text-white text-lg font-thin my-2 hover:bg-black/20 transition">
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <button className="w-16 h-16 bg-orange-500 flex items-center justify-center">
      <img width={20} height={20} src="/search-outline.svg" />
    </button>
  );
};

const Input = () => {
  return (
    <input
      type="text"
      className="w-3/4 bg-transparent border-b outline-none border-white text-white text-lg font-thin"
      placeholder="Location"
    />
  );
};

export default Search;
