import React from 'react';
import PropTypes from 'prop-types';

//written as arrow function since its a single line with a single return. commit.message because commit is an object.
//only passes in commit as a prop because commit= latestcommit is defined in function above that display
const CommitMessage = ({ commit }) =>(
    <div className='commit-message'>
        {commit.message}
    </div>
);
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};

export default CommitMessage