const CurrentForm = document.querySelector('.auth_container form');

CurrentForm.onsubmit = e => {
   e.preventDefault();
   CheckAllRequiredFields(e.target);
   
}


function CheckAllRequiredFields(current) {

   let db = new Object();

      db = {
         email: current['email'].value,
      }

      AuthForgotPasswordSendData(db);
}
async function AuthForgotPasswordSendData(data) {
   //..set your ajax or axios as you want here
   console.log(data);
}



