import React, { useState } from 'react';
import './reviewForm.style.css';
import firebaseDb from '../../firebase';

import Header from '../../components/header/header.component';


const inputFields = [{ "label": "First Name", "inputType": "text", "placeholder": "First Name...", "name": 'firstname' },
{ "label": "Last Name", "inputType": "text", "placeholder": "Last Name...", "name": 'lastname' },
{ "label": "Email", "inputType": "email", "placeholder": "Email....", "name": 'email' }];

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
        const { name, value, type } = e.target;
        console.log("type is:", type);
        console.log(formState);
        if (type == 'select-one') {
            setformState({ ...formState, ['qualification']: e.target.value });
        }
        else {
            setformState({ ...formState, [name]: value });
        }
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

    const handleFormSubmit = (e) => {
        if (reviewChkBoxSelected.checked == false && reviewChkBoxRejected.checked == false) {
            alert("Plz select status");
            e.preventDefault();
        }
        else if (skillsChecked == "") {
            alert("Please check any skill!");
            e.preventDefault();
        }
        else {
            AddToFireDb(formState);
            alert("Form Submitted");
        }
    }
    const AddToFireDb = (obj) => {
        console.log("AddToFireDb:", obj);
        firebaseDb.child("candidates")
            .push(
                obj,
                err => {
                    if (err)
                        console.log("error while inserting:" + err);
                })
    }
    return (
        <>
            <Header />
            <div className='container'>
                <form onSubmit={handleFormSubmit}>
                    <h2>Feedback Form</h2>
                    <div>
                        {
                            inputFields.map(field => {
                                const { label, inputType, name, placeholder } = field;
                                return (
                                    <div className='row'>
                                        <div className='col-25'>
                                            <label>{label}</label>
                                        </div>
                                        <div className='col-75'>
                                            <input type={inputType}
                                                placeholder={placeholder}
                                                onChange={handleChange}
                                                name={name}
                                                required

                                            />
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
                            <select required onChange={handleChange} >
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

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Status</label>
                        </div>
                        <div className="col-75">
                            {
                                statusFields.map(status => {
                                    const { id, value } = status;
                                    return (
                                        <>
                                            <input type="radio"
                                                name="status"
                                                id={id}
                                                value={value}
                                                onChange={handleChange}

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
                                type='text' required onChange={handleChange}></textarea>
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
        </>


    )
}
export default ReviewForm;