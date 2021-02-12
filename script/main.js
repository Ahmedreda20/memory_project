const HeaderBtn = document.querySelector('.btn_menu');
const MdNav = document.querySelector('.navbar_md');

HeaderBtn.onclick = () => {
   HeaderBtn.classList.toggle('btn_active');
   MdNav.classList.toggle('active_md');
}

const AllElements = document.querySelector('body');

