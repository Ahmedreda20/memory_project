const CurrentForm = document.querySelector('.settings_container form');

CurrentForm.onsubmit = e => {
   e.preventDefault();
   CheckAllRequiredFields(e.target);
   
}

const Uploader = CurrentForm['pic'];

const Preview = CurrentForm.querySelector('.uploader_preview');

Uploader.onchange = e => {
   let file = e.target.files[0];
   Preview.style.backgroundImage = `url(${ URL.createObjectURL(file) })`;
}

CheckAllRequiredFields = (current) => {
    
    let db = new Object();
    
      const pass = current['password'].value;
      const passconfirm = current['confirm_password'].value;
      const CurrentConfirmPassword = current['confirm_password'];

      if (pass === passconfirm) {
         CurrentConfirmPassword.classList.remove('error');
         AuthSettings(current, db);
      } else {
         CurrentConfirmPassword.classList.add('error');
      }
    
}

function AuthSettings(current , data) {

   if (Uploader.value !== '') {

      data = {
         name: current['name'].value,
         email: current['email'].value,
         password: current['password'].value,
         password_confirm: current['confirm_password'].value,
         more: current['more'].value,
         file: current['pic'].files[0],
         filename: current['pic'].files[0].name
      }
      
   } else {

      data = {
         name: current['name'].value,
         email: current['email'].value,
         password: current['password'].value,
         password_confirm: current['confirm_password'].value,
         more: current['more'].value,
         file: '',
         filename: '',
      }
      
   }

   console.log(data);
}