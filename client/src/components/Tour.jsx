import React from "react";

const Tour=()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Tornament Match</h1>
      </div>
             <div className="container apna">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">

                <form>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Start Date and Time</label>
  <input type="datetime-local" class="form-control" id="exampleFormControlInput1" placeholder="Location"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">End Date and Time</label>
  <input type="datetime-local" class="form-control" id="exampleFormControlInput1" placeholder="Location"/>
</div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Match Location</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Location"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Tournament Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tournament"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

  
</div>

</form>
</div>
</div>
</div>



        </>
    );
};

export default Tour;