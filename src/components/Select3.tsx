const Select3 = ({ value, onSelect, options, placeHolder }) => {
  return (
    <select
      value={value}
      defaultValue={""}
      onChange={(e) => onSelect(e.target.value)}
      className=" bg-white mt-0 mmd:h-[64px] h-[45px] border pl-[22px] text-[17px] pr-[22px] w-[300px] rounded-full"
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

export default Select3;
