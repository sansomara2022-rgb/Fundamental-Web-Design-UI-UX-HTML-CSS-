/*
INPUT        TYPE	USAGE	                                          EXAMPLE
------------------------------------------------------------------------------------------------------------------------------------
Text	     defines a one-line input field for text input	        <input type="text">
radio        lets the user pick ONE option from a group             <input type="radio" name="gender" value="male"> Male
             (inputs sharing the same name)

checkbox      checkbox	lets the user tick zero, one or             <input type="checkbox" name="hobby" value="music"> Music
              several options (on/off)	              

rangs         slider to choose a number between a min and a max     <input type="range" min="0" max="100" value="20">

  
submit        button that sends the form data to the server         <input type="submit" value="Create">

textarea      textarea	multi-line text field (a separate tag,      <textarea rows="4" cols="30"></textarea>
               not an input type)	
               <textarea rows="4" cols="30"></textarea>

select         select	dropdown list to choose one option          <select><option>Employed</option><option>Student</option></select>
               (a separate tag with <option>)	

color          color picker that returns a hex value                 <input type="color" value="#1abc9c">

file           lets the user choose a file to upload                 <input type="file" accept="image/*"> 
               from their device

--------------------------------------------------------------------------------------------------------------------------------------

MINI CHALLENGES	
Highlight the input field when it is focused

 input:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 0 3px rgba(26,188,156,.25);
  outline: none;
  }
                                                              
Change the button background color on hover	
  button {
     background: #1abc9c; 
     transition: background .2s; 
    }
  button:hover { 
      background: #16a085;
     }

Create a search bar with rounded corners and a shadow effect
	<input type="search" class="search" placeholder="Search...">
 
  .search {
      width: 300px; padding: 10px 16px;
      border: 1px solid #ddd; border-radius: 25px;
      box-shadow: 0 2px 8px rgba(0,0,0,.2);
    }

Display a different style when the checkbox is checked	
  <input type="checkbox" id="c"> <label for="c">Agree</label>
 
  input:checked + label { color: #1abc9c; font-weight: bold; }
  input[type=checkbox]:checked { accent-color: #1abc9c; }

HARD! Style a checkbox to have three states: unchecked, checked, and indeterminate.	
   <input type="checkbox" id="tri">
 
   #tri {
      appearance: none; width: 22px; height: 22px;
      border: 2px solid #888; border-radius: 4px;
      background: #fff; cursor: pointer;
    }
   #tri:checked { 
     background: #1abc9c; 
     border-color: #1abc9c; 
    }
    #tri:checked::after { 
      content: "\2713"; 
      color: #fff; 
      display: block; 
      text-align: center;
      line-height: 18px; 
    }
    #tri:indeterminate { 
      background: #f1c40f; 
      border-color: #f1c40f;
    }
    #tri:indeterminate::after {
      content: "\2212";
      color: #fff;
      display: block;
      text-align: center;
      line-height: 18px; }
 
   // JS: indeterminate can only be set from JavaScript
   document.getElementById('tri').indeterminate = true;


*/