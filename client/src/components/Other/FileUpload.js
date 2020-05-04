import React, { Fragment, useState } from 'react'

const FileUpload = () => {
const [file, setFile] = useState('');
const [filename, setFilename] = useState('Choose File');

const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
}

    return (
        <div>

            <Fragment>
                <form>
                    <div className="custom-file">
                        <input type="file" className="custome-file-input" id="customefile" onChange={onChange}/>
                            <lable className="custome-file-lable" for="customFile">
                                {fileName}
                            </lable>
                    </div>
                    <input type="submit" value="Uplaod" className="btn btn=primary btm-block mt-4"/>
                </form>
            </Fragment>/>

        </div>
    )
}

export default FileUpload