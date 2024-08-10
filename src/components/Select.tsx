const Select = ({value, onSelect, options, placeHolder}) => {
  return (
    <select
      value={value}
      defaultValue={""}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full bg-white mt-0 mmd:h-[64px] h-[45px] border rounded-md pl-[22px] text-[17px] pr-[22px]"
    >
      <option value="" className="text-[#3D3D3D]">
        {placeHolder}
      </option>
      {options &&
        options.map((option, index) => (
          <option value={option.id} key={index}>
            {option.name}
          </option>
        ))}
    </select>
  );
};

export default Select;
