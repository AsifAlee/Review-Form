import React from 'react';
import firebaseDb from '../../firebase';
import { useEffect, useState } from 'react';
import './candidates.style.css';
const CandidatesData = () => {
    const [candidates, setcandidates] = useState({});

     useEffect(() => {
        firebaseDb.child("candidates").on("value", snapShot => {
            console.log("ref while retrieving:",firebaseDb.child('candidates'));
            console.log("from firebase:", snapShot.val());
            // candidate = snapShot.val();
            if (snapShot.val() != null)
                setcandidates({ ...snapShot.val() });
        })
    }, ) 

     const handleSearch = () => {
        let searchCandidate = document.getElementById('searchuser');
        console.log("input value:",searchCandidate.value);
        console.log("firbase ref:",firebaseDb.child('candidates'));
        firebaseDb.child('candidates').orderByChild('firstname').equalTo(searchCandidate.value)
          .on("child_added",(snap) => {
              console.log("the filtered candidate is:",snap.val());
              setcandidates({...snap.val()});
              
          })

    } 



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
                            return (
                                <tr key={key}>
                                    <td>{candidates[key].firstname}</td>
                                    <td>{candidates[key].lastname}</td>
                                    <td>{candidates[key].email}</td>
                                    <td>{candidates[key].qualification}</td>
                                    <td>{candidates[key].skills}</td>
                                    <td>{candidates[key].status}</td>
                                    <td>{candidates[key].review}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )


}

export default CandidatesData;