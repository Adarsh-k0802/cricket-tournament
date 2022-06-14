import React from "react";

const Match=()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Team Details</h1>
      </div>
             <div className="container apna">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">

                <form>
            
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Team 1</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Team 1 Name"/>
</div>
<div class="mb-3">
<select class="form-select" aria-label="Default select example">
  <option selected>Location</option>
  <option value="1">Home</option>
  <option value="2">Away</option>
  
</select>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Team 2</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Team 2 Name"/>
</div>
<div class="mb-3">
<select class="form-select" aria-label="Default select example">
  <option selected>Location</option>
  <option value="1">Home</option>
  <option value="2">Away</option>
  
</select>
</div>

</form>
</div>
</div>
</div>



        </>
    );
};

export default Match;