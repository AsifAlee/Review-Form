import React, { useState } from 'react';
import './review_form.css';
import firebaseDb from '../../firebase';

const inputFields = [{ "label": "First Name", "inputType": "text", "placeholder": "First Name..." },
{ "label": "Last Name", "inputType": "text", "placeholder": "Last Name..." },
{ "label": "Email", "inputType": "email", "placeholder": "Email...." }];

const skillsCheckboxes = [{ 'id': 'react', 'value': 'React' }, { 'id': 'vue', 'value': 'Vue' }, { 'id': 'angular', 'value': 'Angular' }
    , { 'id': 'laravel', 'value': 'Laravel' }, { 'id': 'codeigniter', 'value': 'CodeIgniter' }, { 'id': 'django', 'value': 'Django' }]

const statusFields = [{ 'id': 'selected', 'value': 'selected', 'label': 'selected' },
{ 'id': 'rejected', 'value': 'rejected', 'label': 'rejected' }];


var skillsChecked = "";
var checkboxes = document.getElementsByName('skills');
const ReviewForm = () => {
    let initialFieldValues = {
        firstname: '',
        lastname: '',
        email: '',
        qualification: '',
        skills: '',
        status: '',
        review: ''
    };

    const [formState, setformState] = useState(initialFieldValues);
    let reviewChkBoxSelected = document.getElementById('selected');
    let reviewChkBoxRejected = document.getElementById('rejected');

    const handleChange = e => {
        const { name, value } = e.target;
        setformState({ ...formState, [name]: value });
        console.log(formState);
    }

    const handleSelect = e => {
        const [name, value] = e.target;
        console.log("value isss:", e.target.value);
        console.log("name isss:", e.target.name);
        console.log("select name:", name);
        console.log("select value is:", value);
        setformState({ ...formState, ['qualification']: e.target.value });
        console.log(formState);

    }

    const handleSkillsCheckBox = (e) => {
        const { name, value } = e.target;
        skillsChecked = "";
        console.log("length of checkboxes", checkboxes.length);
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked) {
                skillsChecked += " " + checkboxes[i].value;
            }
        }
        console.log("skills checked are:", skillsChecked);
        setformState({ ...formState, [name]: skillsChecked });
        console.log(formState);
    }

    const handleStatusCheckbox = (e) => {
        var statusCheckboxes = document.getElementsByName('status');
        const { name, value } = e.target;
        console.log("name is:", name);
        console.log("value is:", value);
        console.log("radio status:", e.target.value);
        setformState({ ...formState, [name]: value });

    }

    const handleReview = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setformState({ ...formState, [name]: value });
        console.log(formState);

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("handleFormSubmit Called");
        console.log(formState);

        console.log("checked items on handleSubmit:", skillsChecked);
        if (reviewChkBoxSelected.checked == false && reviewChkBoxRejected.checked == false) {
            alert("Plz select status");
            e.preventDefault();
        }
        AddToFireDb(formState);
    }
    const AddToFireDb = (obj) => {
        console.log("AddToFireDb:", obj);
        firebaseDb.child("candidates")
            .push(
                obj,
                err => {
                    if (err)
                        console.log("error while inserting:" + err);
                }
            )
    }


    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h2>Feedback Form</h2>
                <div>
                    {
                        inputFields.map(field => {
                            return (
                                <div className='row'>
                                    <div className='col-25'>
                                        <label>{field.label}</label>
                                    </div>
                                    <div className='col-75'>
                                        <input type={field.inputType} placeholder={field.placeholder} onChange={handleChange} />
                                    </div>

                                </div>
                            )

                        })
                    }
                </div>



                <div className="row">
                    <div className="col-25">
                        <label htmlFor="qualification">Highest Qualification
                     </label>
                    </div>
                    <div className="col-75">
                        <select required onChange={handleSelect} >
                            <option value="" name="qualification">--Select--</option>
                            <option value="Bachelors" name="qualification">Bachelors</option>
                            <option value="HSSC" name="qualification">HSSC</option>
                            <option value="SSC" name="qualification">SSC</option>
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
                                    name="skills"
                                    id="React"
                                    value="React"
                                    onChange={handleSkillsCheckBox} />
                                <label htmlFor="React">React</label>
                            </div>

                            <div>
                                <input type="checkbox"
                                    name="skills"
                                    id="Vue"
                                    value="Vue"
                                    onChange={handleSkillsCheckBox}
                                />
                                <label htmlFor="Vue">Vue</label>
                            </div>


                            <div>
                                <input type="checkbox"
                                    name="skills"
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
                                    name="skills"
                                    id="Laravel"
                                    value="Laravel"
                                    onChange={handleSkillsCheckBox}
                                />
                                <label htmlFor="React">Laravel</label>
                            </div>

                            <div>
                                <input type="checkbox"
                                    name="skills"
                                    id="CodeIgniter"
                                    value="CodeIgniter"
                                    onChange={handleSkillsCheckBox}
                                />
                                <label htmlFor="Vue">CodeIgniter</label>
                            </div>


                            <div>
                                <input type="checkbox"
                                    name="skills"
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
                <div className='row'>
                    <div className="col-25">
                        <label htmlFor="lname">Status</label>
                    </div>
                    <div className="col-75">
                        {
                            statusFields.map(status => {

                                return (
                                    <>
                                        <input type="radio"
                                            name="status"
                                            id={status.id}
                                            value={status.value}
                                            onChange={handleStatusCheckbox}
                                        />
                                        <label htmlFor="selected">{status.label}</label>
                                    </>

                                )
                            })
                        }



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
                        <input type="button" value="Attach CV" className='attach-cv' />
                    </div>
                </div>

                {/* Submit button */}
                <div className="submit-btn-div">
                    <input type="submit" value="Submit" />
                </div>
            </form>

        </div>

    )
}

export default ReviewForm;