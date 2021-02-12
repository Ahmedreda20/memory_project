const CurrentForm = document.querySelector('.auth_container form');

CurrentForm.onsubmit = e => {
   e.preventDefault();
   CheckAllRequiredFields(e.target);
   
}


function CheckAllRequiredFields(current) {

   let db = new Object();
   const pass = current['password'].value;
   const passconfirm = current['confirm_password'].value;
   const CurrentConfirmPassword = current['confirm_password'];

   
   if (pass === passconfirm) {
      
      db = {
         password: current['password'].value,
         confirmpass: current['confirm_password'].value,
      }
      
      AuthReturnPassword(db);
      CurrentConfirmPassword.classList.remove('error');
   } else {
      CurrentConfirmPassword.classList.add('error');
   }

}
async function AuthReturnPassword(data) {
   //..set your ajax or axios as you want here
   console.log(data);
}



