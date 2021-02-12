const CurrentForm = document.querySelector('.auth_container form');

CurrentForm.onsubmit = e => {
   e.preventDefault();
   CheckAllRequiredFields(e.target);
   
}

function CheckAllRequiredFields(current) {

   let db = new Object();

      db = {
         email: current['email'].value,
         password: current['password'].value,
      }

      AuthSignInFormSetDataInside(db);
}
async function AuthSignInFormSetDataInside(data) {
   //..set your ajax or axios as you want here
   console.log(data);
}