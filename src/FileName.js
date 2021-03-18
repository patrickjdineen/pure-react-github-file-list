import React from 'react';
import PropTypes from 'prop-types';

//function for filename cell with also includes file folder from FileIcon function
function FileName({ file }) {
    return (
        <div className='file-name'>
                {file.name}
        </div>
    );
}
FileName.propTypes ={
    file: PropTypes.object.isRequired
};

export default FileName