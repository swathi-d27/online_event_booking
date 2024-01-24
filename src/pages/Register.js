import React from 'react'

export default function Register() {
  return (
    <div className='container' >
        
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control"  placeholder="NAME"/>
    </div>
    <div class="form-group col-md-6">
      <input type="email" class="form-control"  placeholder="EMAIL"/>
    </div>
  </div>
  
 
  <div class="form-group col-md-6">
    <input type="number" class="form-control"  placeholder="PHONE NUMBER"/>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>COLLEGE</option>
        <option>MADRAS CHRISTIAN COLLEGE</option>
        <option>SRM</option>
        <option>LOYALA</option>
      </select>
      </div>
    <div class="form-group col-md-6">
      <select id="inputState" class="form-control">
        <option selected>SHIFT</option>
        <option>SFS</option>
        <option>AIDED</option>
      </select>
    </div>
   
  </div>
  
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
  )
}
