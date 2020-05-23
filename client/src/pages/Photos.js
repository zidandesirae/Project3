import React, { Fragment, useState } from 'react';
import PageContainer from '../components/General/PageContainer';
import Message from '../components/Photos/Message';
import Progress from '../components/Photos/Progress';
import axios from 'axios';

function Photos(props) {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };

    return (
        <PageContainer title="Photo Album">
            <h4 className="mt-4 text-center">Share Your Memories!</h4>
            <Fragment>
                {message ? <Message msg={message} /> : null}
                <form onSubmit={onSubmit}>
                    <div className='custom-file mb-4'>
                        <input
                            type='file'
                            className='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {filename}
                        </label>
                    </div>
                    <Progress percentage={uploadPercentage} />
                    <input
                        type='submit'
                        value='Upload'
                        className='btn btn-block mt-4'
                    />
                </form>
                {uploadedFile ? (
                    <div className='row mt-5'>
                        <div className='col-md-6 m-auto'>
                            <h3 className='text-center'>{uploadedFile.fileName}</h3>
                            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                        </div>
                    </div>
                ) : null}
            </Fragment>
        </PageContainer>
    );
}

export default Photos;