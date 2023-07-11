import React, {Component} from "react";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function FileUpload() {
    const {subname} = useParams();

    const [file, setFile] = useState(null);
    const [author, setauthor] = useState();
    const [groupid, setgroupid] = useState();

    const submitFile = () => {

        const fileData = {
            author : author,
            submittedDate : Date(),
            grpID : groupid,
            fileName : file.name,
            submissionType : subname
        }

        const data = new FormData();
        data.append('file', file);
        console.log(data);
        axios.post('http://localhost:3001/file/upload', data)
            .then((res) => {
                console.log(res);

            }).then(() => {
                axios.post('http://localhost:3001/api/submission//addDocSubmission', fileData)
                    .then(() => alert('Successfully Submission !'))
                    .catch((err) => console.log(err))
        })
            .catch((err) => console.log(err))
    }

    return (
        <div className="container">
            <br/>
            <br/>
            <center>
                <div class="card" style={{width: " 28rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Upload File</h5>
                        <br/>
                        <label for="formFileMultiple" class="form-label">
                            Your File Should be,<b> pdf , </b>
                            <b>doc , </b>
                            <b>docx </b>
                        </label>
                        <br/>
                        <p class="card-text" style={{textAlign: "left"}}>
                            Submission Type :
                        </p>
                        <input
                            class="form-control"
                            type="text"
                            id="id1"
                            value={subname}
                        />
                        <br/>
                        <p class="card-text" style={{textAlign: "left"}}>
                            Attachment :
                        </p>


                        <input className="form-control" type="file" id="formFile" onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}/>


                        <br/>
                        <p class="card-text" style={{textAlign: "left"}}>
                            Authour :
                        </p>
                        <input
                            class="form-control"
                            type="text"
                            id="id1"
                            value={author}
                            onChange={(e) => {
                                setauthor(e.target.value);
                            }}
                        />
                        <br/>

                        <p class="card-text" style={{textAlign: "left"}}>
                            Group ID :
                        </p>
                        <input
                            class="form-control"
                            type="text"
                            id="id2"
                            value={groupid}
                            onChange={(e) => {
                                setgroupid(e.target.value);
                            }}
                        />
                        <br/>
                        <button onClick={()=>{submitFile()}}>submit</button>
                    </div>
                </div>
                <br/>
                <br/>
            </center>
        </div>
    );
}
