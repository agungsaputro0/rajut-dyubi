import { forwardRef, useState } from "react";
import Label from "./Label";
import Select from "react-select";

interface SelectElementProps {
  inputClass?: string;
  id?: string;
  forwhat: string;
  labelMessage: string;
  options: { value: string; label: string }[];
  onChange: (selectedOption: any) => void; // Handler function for onChange
  onSearch: (searchTerm: string) => void; // Handler function for onSearch
  value?: string;
  name?: string; // Optional, as needed
}

const SearchableSelect = forwardRef<HTMLDivElement, SelectElementProps>(
  ({ inputClass, forwhat, labelMessage, options, onChange, onSearch, value, name }, ref) => {
    const [searchTimer, setSearchTimer] = useState<NodeJS.Timeout | null>(null);

    const handleSearchChange = (newSearchTerm: string) => {
      if (searchTimer) {
        clearTimeout(searchTimer); // Clear the previous timeout if there's one
      }

      // Set a new timeout to call the onSearch function after a delay
      const timer = setTimeout(() => {
        onSearch(newSearchTerm); // Call the onSearch function after the delay
      }, 500); // 500ms delay (can be adjusted)

      setSearchTimer(timer); // Store the timer to clear it later
    };

    return (
      <div className={inputClass}>
        <Label className="text-gray-800 font-semibold" forwhat={forwhat} labelMessage={labelMessage} />
        <div ref={ref}>
          <Select
            id={name}
            name={name}
            className="text-sm border-b-2 border-gray-500 w-full py-2 px-2 text-gray-800 placeholder:opacity-90 bg-transparent focus:border-gray-800 border-gray-300"
            options={options}
            onChange={onChange}
            onInputChange={handleSearchChange} // Handle search change with delay
            placeholder="Select Option"
            isSearchable
            value={options.find((option) => option.value === value)}
            styles={{
              control: (provided) => ({
                ...provided,
                border: 0,
                backgroundColor: "transparent",
                marginBottom: "-9px",
                marginTop: "-8px",
                boxShadow: "none",
                marginLeft: "-5px",
              }),
              input: (provided) => ({
                ...provided,
                color: "#4A5568",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "#A0AEC0",
                opacity: 0.9,
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#4A5568",
              }),
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? "#fff" : "#4A5568",
                backgroundColor: state.isSelected
                  ? "#4A5568"
                  : state.isFocused
                  ? "#EDF2F7"
                  : "#fff",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: "#A0AEC0",
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />
        </div>
      </div>
    );
  }
);

SearchableSelect.displayName = "SearchableSelect";

export default SearchableSelect;
