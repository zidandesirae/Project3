import React, { Fragment } from 'react'

const FileUpload = () => {
    return (
        <div>

            <Fragment>
                <form>
                    <div className="custom-file">
                        <input type="file" className="custome-file-input" id="customefile"/>
                            <lable className="custome-file-lable" for="customFile">
                                Chouse file
                                </lable>
                    </div>
                    <input type="submit" value="Uplaod" className="btn btn=primary btm-block mt-4"/>
                </form>
            </Fragment>/>

        </div>
    )
}

export default FileUpload