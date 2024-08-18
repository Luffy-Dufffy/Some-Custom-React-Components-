import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const InputField = ({ type, label, icon, className, onChange, value, placeholder }) => {
    const [hasValue, setHasValue] = useState(false);

    const handleHasValueChange = (e) => {
        onChange(e);
        setHasValue(e.target.value.length > 0);
    }

    return (
        <div className={`${className} pt-1 flex justify-center items-center border-black border-2 px-2 rounded-lg relative focus-within:border-blue-500 group ${hasValue ? 'border-blue-500' : ''}`}>
            {icon ? icon : ""}
            <input
                type={type}
                placeholder={placeholder}
                className="p-2 outline-none border-none bg-transparent h-full peer w-full placeholder-transparent focus-within:placeholder-gray-400 transition-all duration-100"
                onChange={handleHasValueChange}
                name={label}
                value={value}
            />
            <label className={`absolute pointer-events-none transition-all duration-300 px-2 border-2 rounded-lg peer-focus:scale-[0.7] peer-focus:-top-3 peer-focus:left-5 peer-focus:bg-white peer-focus:border-blue-500 ${hasValue ? 'scale-[0.7] -top-3 left-5 bg-white border-blue-500' : `border-transparent top-1.5 ${icon ? 'left-12' : 'left-4'}`}`}>
                {label}
            </label>
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.element,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
}


export default InputField;
