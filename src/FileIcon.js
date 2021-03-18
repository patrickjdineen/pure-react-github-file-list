import React from 'react';
import PropTypes from 'prop-types';

//gets icon for file based on filetype
function FileIcon({ file }){
    let icon='fa-file-text-o';
    if(file.type ==='folder'){
        icon = 'fa-folder';
    }
    return (
        <div className='file-icon'>
            <i className={`fa ${icon}`} />
        </div>
    );
}
FileIcon.propTypes= {
    file: PropTypes.object.isRequired
}
export default FileIcon