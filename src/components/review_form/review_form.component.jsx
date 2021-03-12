import React, { useState } from 'react';
import InputComponent from './../input/input.component';

const inputFields = [{ "label": "First Name", "inputType": "text", "placeholder": "First Name..." },
{ "label": "Last Name", "inputType": "text", "placeholder": "Last Name..." },
{ "label": "Email", "inputType": "email", "placeholder": "Email...." }];



const ReviewForm = () => {

    // const stateObj = [{fname:'',setfname:},{lname:'',setlname:}]

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [qualification, setqualification] = useState('');
    const [skills, setSkills] = useState('');
    const [status, setStatus] = useState('');
    const [review, setReview] = useState('');

    let fnameField = document.getElementById('fname');
    let lnameField = document.getElementById('lname');
    let emailField = document.getElementById('email');

    let reviewChkBoxSelected = document.getElementById('selected');
    let reviewChkBoxRejected = document.getElementById('rejected');

    const handleFnameInput = (e) => {
        setfname(e.target.value);
        console.log("fname", e.target.value);
    }


    const handleLnameInput = (e) => {
        setlname(e.target.value);
        console.log("lname", e.target.value);
    }


    const handleEmailInput = (e) => {
        setEmail(e.target.value);
        console.log("email", e.target.value);
    }

    const handleSelect = (e) => {
        console.log(e.target.value);
        setqualification(e.target.value);
    }


    const handleSkillsCheckBox = (e) => {

        var checkboxes = document.getElementsByName('skills[]');
        var skillsChecked = "";
        console.log("length of checkboxes", checkboxes.length);
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked) {
                skillsChecked += "," + checkboxes[i].value;
            }
        }
        setSkills(skillsChecked);
        console.log("skills checked are:", skills);
    }

    const handleStatusCheckbox = (e) => {
        var statusCheckboxes = document.getElementsByName('status[]');

        console.log("radio status:", e.target.value);
        setStatus(e.target.value);
    }

    const handleReview = (e) => {
        console.log(e.target.value);
        setReview(e.target.value);
    }

    const handleFormSubmit = (e) => {
        console.log("handleFormSubmit Called");
        var checkboxes = document.getElementsByName('skills[]');
        var skillsChecked = "";
        console.log("length of checkboxes", checkboxes.length);
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked) {
                skillsChecked += "," + checkboxes[i].value;
            }
        }

        if (skillsChecked == "") {
            alert("Please check any skill");
            e.preventDefault();
        }

        console.log("checked items are:", skillsChecked);
        if (reviewChkBoxSelected.checked == false && reviewChkBoxRejected.checked == false) {
            alert("Plz select status");
            e.preventDefault();
        }

        let stateVar = {
            firstName: fname, lastName: lname, email: email, qualification: qualification,
            skills: skills, status: status, review: review
        };
        console.log(stateVar);

        localStorage.setItem('interview Form', JSON.stringify(stateVar));

        //alert("fname:"+fname + " ,"+ "email:"+ email + "skills: " + skills + "status:"+ status + "qualification:" + qualification);

    }


    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Feedback Form</h2>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text"
                        id="fname" name="firstname"
                        placeholder="Your name.."
                        required
                        onChange={handleFnameInput}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                    <input type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Your last name.."
                        required
                        onChange={handleLnameInput}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="col-75">
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Email:"
                        required
                        onChange={handleEmailInput}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="qualification">Highest Qualification
                     </label>
                </div>
                <div className="col-75">
                    <select id="qualification" name="qualification" required onChange={handleSelect} >
                        <option value="">--Select--</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="HSSC">HSSC</option>
                        <option value="SSC">SSC</option>
                    </select>
                </div>
            </div>
            {/* Skills */}
            <div className='row'>
                <div className="col-25">
                    <label htmlFor="skills">Skills
                     </label>
                </div>
                <div className='col-75 skillsDiv'>
                    <div className='checkbox-Div'>
                        <div>
                            <input type="checkbox"
                                name="skills[]"
                                id="React"
                                value="React"
                                onChange={handleSkillsCheckBox} />
                            <label htmlFor="React">React</label>
                        </div>

                        <div>
                            <input type="checkbox"
                                name="skills[]"
                                id="Vue"
                                value="Vue"
                                onChange={handleSkillsCheckBox}
                            />
                            <label htmlFor="Vue">Vue</label>
                        </div>


                        <div>
                            <input type="checkbox"
                                name="skills[]"
                                id="Angular"
                                value="Angular"
                                onChange={handleSkillsCheckBox}
                            />
                            <label htmlFor="Angular">Angular</label>

                        </div>
                    </div>

                    <div className="checkbox-Div">
                        <div>
                            <input type="checkbox"
                                name="skills[]"
                                id="Laravel"
                                value="Laravel"
                                onChange={handleSkillsCheckBox}
                            />
                            <label htmlFor="React">Laravel</label>
                        </div>

                        <div>
                            <input type="checkbox"
                                name="skills[]"
                                id="CodeIgniter"
                                value="CodeIgniter"
                                onChange={handleSkillsCheckBox}
                            />
                            <label htmlFor="Vue">CodeIgniter</label>
                        </div>


                        <div>
                            <input type="checkbox"
                                name="skills[]"
                                id="Django"
                                value="Django"
                                onChange={handleSkillsCheckBox}
                            />
                            <label htmlFor="Angular">Django</label>

                        </div>

                    </div>

                </div>

            </div>

            {/* Interview Status */}

            <div className="row">
                <div className="col-25">
                    <label htmlFor="lname">Status</label>
                </div>
                <div className="col-75">
                    <input type="radio"
                        name="status[]"
                        id="selected"
                        value='selected'
                        onChange={handleStatusCheckbox}
                    />
                    <label htmlFor="selected">Selected</label>

                    <input type="radio"
                        name="status[]"
                        id="rejected"
                        value='rejected'
                        onChange={handleStatusCheckbox}
                    />
                    <label htmlFor="rejected">Rejected</label>
                </div>


            </div>
            {/* write a review */}
            <div className="row">
                <div className="col-25">
                    <label htmlFor="review">Review</label>
                </div>
                <div className="col-75">
                    <textarea id="review" name="review" placeholder="Write a review" className="textArea"
                        required onChange={handleReview}></textarea>
                </div>
            </div>
            {/* Attach a CV button */}
            <div className="row">
                <div className="col-25">

                </div>
                <div className="col-75">
                    <input type="button" value="Attach CV" />
                </div>
            </div>

            {/* Submit button */}
            <div className="submit-btn-div">
                <input type="submit" value="Submit" />
            </div>
        </form>
    )


}
export default ReviewForm;