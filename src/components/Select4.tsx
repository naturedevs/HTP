const Select4 = ({ value, onSelect, options, placeHolder }) => {
  return (
    <select
      value={value}
      defaultValue={""}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full md:h-[63px] h-[45px] rounded-[31.5px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pl-5 mt-5"
    >
      <option value="" className="text-[#3D3D3D]">
        {placeHolder}
      </option>
      {options &&
        options.map((option, index) => (
          <option value={index} key={index}>
            {index == 0
              ? "within 1 mile"
              : options[index - 1].name + "-" + options[index].name}
          </option>
        ))}
      {options.length > 0 ? (
        <option value={options.length}>
          {options[options.length - 1].name + "+"}
        </option>
      ) : (
        <></>
      )}
    </select>
  );
};

export default Select4;
