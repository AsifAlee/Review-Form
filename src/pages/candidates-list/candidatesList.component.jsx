import React from 'react';
import firebaseDb from '../../firebase';
import { useEffect, useState } from 'react';
import './candidatesList.style.css';
import Header from '../../components/header/header.component';
const CandidatesList = () => {
    const [candidates, setcandidates] = useState({});

    useEffect(() => {
        console.log("useEffect got called");
        firebaseDb.child("candidates").on("value", snapShot => {
            if (snapShot.val() != null)
                setcandidates({ ...snapShot.val() });
        })
    }, [candidates])


    const filterCandidates = () => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById('searchuser');
        filter = input.value.toUpperCase();
        table = document.getElementById("candidates-table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    return (
        <div className='candidates-table'>
            <Header />
            <div className='search-bar'>
                <h2>Candidates</h2>
                <input placeholder='Search candidate...' type='search' id='searchuser' onKeyUp={filterCandidates} />
                <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            <table id='candidates-table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Qualification</th>
                        <th>Skills</th>
                        <th>Status</th>
                        <th>Review</th>
                        <th>Resume</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Object.keys(candidates).map(key => {
                            const{firstname,lastname,email,qualification,skills,status,review} = candidates[key];
                            return (
                                <tr key={key}>
                                    <td>{firstname}</td>
                                    <td>{lastname}</td>
                                    <td>{email}</td>
                                    <td>{qualification}</td>
                                    <td>{skills}</td>
                                    <td>{status}</td>
                                    <td>{review}</td>
                                </tr>)
                        })
                    }
                </tbody>

            </table>
        </div>
    )


}

export default CandidatesList;