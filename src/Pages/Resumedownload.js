import React from 'react';
import resume from '../img/resume.pdf'
const Resumedownload = () => {
    return (
        <div className='text-center mt-5'>
            <button class="btn btn-primary ml-2"><a href={resume} target={'_blank'}>Download Resume</a></button>
        </div>
    );
};

export default Resumedownload;