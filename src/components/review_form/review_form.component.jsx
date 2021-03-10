import React from 'react';
import InputComponent from './../input/input.component';

const inputFields = [{ "label": "First Name", "inputType": "text", "placeholder": "First Name..." },
{ "label": "Last Name", "inputType": "text", "placeholder": "Last Name..." },
{ "label": "Email", "inputType": "email", "placeholder": "Email...." }];

const ReviewForm = () => {
    return (
        <div>
            <h2>Feedback Form</h2>
         
             <div className="row">
                <div className="col-25">
                    <label for="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label for="lname">Last Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label for="email">Email</label>
                </div>
                <div className="col-75">
                    <input type="email" id="email" name="email" placeholder="Email:" />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label for="qualification">Highest Qualification
                     </label>
                </div>
                <div className="col-75">
                    <select id="qualification" name="qualification">
                        <option value="">Bachelors</option>
                        <option value="">HSSC</option>
                        <option value="">SSC</option>
                    </select>
                </div>
            </div>
            {/* Skills */}
            <div className='row'>
                <div className="col-25">
                    <label for="skills">Skills
                     </label>
                </div>
                <div className='col-75 skillsDiv'>
                    <div className='checkbox-Div'>
                        <div>
                            <input type="checkbox" name="" id="React" />
                            <label for="React">React</label>
                        </div>

                        <div>
                            <input type="checkbox" name="" id="Vue" />
                            <label for="Vue">Vue</label>
                        </div>


                        <div>
                            <input type="checkbox" name="" id="Angular" />
                            <label for="Angular">Angular</label>

                        </div>
                    </div>

                    <div class="checkbox-Div">
                        <div>
                            <input type="checkbox" name="" id="React" />
                            <label for="React">Laravel</label>
                        </div>

                        <div>
                            <input type="checkbox" name="" id="Vue" />
                            <label for="Vue">CodeIgniter</label>
                        </div>


                        <div>
                            <input type="checkbox" name="" id="Angular" />
                            <label for="Angular">Django</label>

                        </div>

                    </div>

                </div>

            </div>

            {/* Interview Status */}

            <div className="row">
                <div className="col-25">
                    <label for="lname">Status</label>
                </div>
                <div className="col-75">
                    <input type="checkbox" name="" id="selected" />
                    <label for="selected">Selected</label>

                    <input type="checkbox" name="" id="rejected" />
                    <label for="rejected">Rejected</label>
                </div>


            </div>
            {/* write a review */}
            <div className="row">
                <div className="col-25">
                    <label for="review">Review</label>
                </div>
                <div className="col-75">
                    <textarea id="review" name="review" placeholder="Write a review" className="textArea"></textarea>
                </div>
            </div>
            {/* Attach a CV button */}
            <div class="row">
                <div class="col-25">

                </div>
                <div class="col-75">
                    <input type="submit" value="Attach CV" />
                </div>
            </div>

            {/* Submit button */}
            <div class="submit-btn-div">
                <input type="submit" value="Submit" />
            </div>
        </div>
    )


}
export default ReviewForm;