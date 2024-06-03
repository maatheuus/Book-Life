function FilterLayout({ onChange, id, label, name }) {
  return (
    <li className="flex items-center gap-2 py-2" key={id}>
      <div className="flex items-center gap-1 ">
        {" "}
        <input
          id={id}
          value={id}
          type="radio"
          name={name}
          className="btn-radio checked:btn-gradient"
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
        >
          {label}
        </label>
      </div>
    </li>
  );
}

export default FilterLayout;
