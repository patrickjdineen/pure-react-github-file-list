import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className='time'>
            {timeString}
        </span>
    );
};
Time.propTypes = {
    time: PropTypes.string.isRequired
};

//export default sets that const Time will be what is imported when running an import Time from Time 
export default Time