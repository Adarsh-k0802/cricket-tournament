import React from "react";

const Home=()=>{




    
    return(
        <>
             <div className="container apna">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
        <form>
        <select className="form-select" aria-label="Default select example">
  <option selected>Select type of Match</option>
  <option value="1">Friendly</option>
  <option value="2">Tournament</option>
</select>
<div className="btnadarsh">

<button type="button" class="btn btn-outline-dark">Submit</button>
</div>
</form>
</div>
</div>
</div>


<div className="container apna">
        {/* <div className="row">
            <div className="col-md-6 col-12 mx-auto"> */}
<div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Team 1</th>
      <th scope="col">Team 2</th>
      <th scope="col">Match Type</th>
      <th scope="col">Tournament</th>
      <th scope="col">Start D and T</th>
      <th scope="col">End D and T</th>
      <th scope="col">Location</th>
      <th scope="col">Comment</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>KKR</td>
      <td>MI</td>
      <td>Tournament</td>
      <td>IPL</td>
      <td>12-10-2022, 7:00 PM</td>
      <td>12-10-2022, 10:00 PM</td>
      <td>Wankhede</td>
      <td>Delay of 20 mins is happening</td>
      
    </tr>
   
    
  </tbody>
</table>
    </div>
    </div>
{/* </div>
</div> */}
        </>
    );
};

export default Home;