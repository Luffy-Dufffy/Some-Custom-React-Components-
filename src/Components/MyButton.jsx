import React from 'react'
import PropTypes from 'prop-types';

const MyButton = ({ className, text, onClick, buttonProperties }) => {
    return (
        <button
            className={`bg-blue-600 px-4 py-2 rounded-lg border-2 border-gray-300 text-white ${className}`}
            onClick={onClick}
            {...buttonProperties}
        >
            {text}
        </button>
    );
}

MyButton.PropTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    buttonProperties: PropTypes.object,
}

MyButton.defaultProps = {
    className: '',
    text: 'Click Here',
}

export default MyButton