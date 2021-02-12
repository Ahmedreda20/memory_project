const CurrentForm = document.querySelector('.auth_container form');

CurrentForm.onsubmit = e => {
   e.preventDefault();
   CheckAllRequiredFields(e.target);
   
}

function CheckAllRequiredFields(current) {

   let db = new Object();

   if (current['more'].value !== '') {
       db = {
         name: current['name'].value,
         email: current['email'].value,
         password: current['password'].value,
         more: current['more'].value,
      }

      //set data with more value
      AuthRegisterFormSetDataInside(db);
   } else {
       db = {
         name: current['name'].value,
         email: current['email'].value,
         password: current['password'].value,
         more: '',
      }

      //set data without more value
      AuthRegisterFormSetDataInside(db);
   }
   
   console.log(db);
}
async function AuthRegisterFormSetDataInside(data) {
   //..set your ajax or axios as you want here
   console.log(data);
}