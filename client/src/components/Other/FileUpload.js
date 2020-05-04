import React, { Fragment, useState } from 'react';
import axios from 'axios';


const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedfile, setUploadedFile] = useState({});
    const [message, setMessage] = useState("");

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    const onSubmit = async e => {
        e.preventDefualt();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
               setMessage('there was a problem with the server');
            } else {
                setMessage('err.response.data.msg');
            }
        }
    };

    return (
        <div>

            <Fragment>
                <form>
                    <div className="custom-file">
                        <input type="file" className="custome-file-input" id="customefile" onChange={onChange} />
                        <lable className="custome-file-lable" for="customFile">
                            {fileName}
                        </lable>
                    </div>
                    <input type="submit" value="Uplaod" className="btn btn=primary btm-block mt-4" />
                </form>
                {uploadedFile ? (<div className="row mt-5">
                    <h3 className="text-center">{uploadFile.fileName}</h3>
                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
                </div>
     ) : null}
            </Fragment>/>

        </div>
    )
}

export default FileUpload