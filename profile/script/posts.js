const postscontainer = document.querySelector('.content_box');

const posts = [
      {
         "content": "لازم تتقبل فكره أنك وحيد ومحدش بيدور عليك",
         "user": {
            "name": "Eman Elsayed",
            "id": 0,
            "img":{
               "src": "../img/avatar.png",
               "alt": "profile image"
            }
         },
         "likes":[
            {
               "name": "Eslam Ayman",
               "id": 0,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Eslam Mohammed",
               "id": 36545,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Email Elsayed",
               "id": 1201425454,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
         ],
         "comments":[
            {
               "name": "Ploy Adams",
               "id": 0,
               "content": "يبدو رأعً",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Ahmed Mohammed",
               "id": 0,
               "content": "حصل 😢",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
            
         ]
      },
      {
         "content": "حكيتلك مشاكليّ علشان متبقاش زيهّم، وبقيت.",
         "user": {
            "name": "Eman Elsayed",
            "id": 0,
            "img":{
               "src": "../img/avatar.png",
               "alt": "profile image"
            }
         },
         "likes":[
            {
               "name": "Eslam Ayman",
               "id": 0,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
         ],
         "comments":[
            {
               "name": "Ploy Adams",
               "id": 0,
               "content": "يبدو رأعً",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Ahmed Mohammed",
               "id": 0,
               "content": "حصل 😢",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
            
         ]
      },
      {
         "content": "في ليّل قديم يُشبه‌ هذا ، كنا نتحدث.",
         "user": {
            "name": "Eman Elsayed",
            "id": 0,
            "img":{
               "src": "../img/avatar.png",
               "alt": "profile image"
            }
         },
         "likes":[
            {
               "name": "Eslam Ayman",
               "id": 0,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
         ],
         "comments":[
            {
               "name": "Ploy Adams",
               "id": 0,
               "content": "يبدو رأعً",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Ahmed Mohammed",
               "id": 0,
               "content": "حصل 😢",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
            
         ]
      },
      {
         "content": "- ‏مهما كنت جيدا سيتم إستبدالك.",
         "user": {
            "name": "Eman Elsayed",
            "id": 0,
            "img":{
               "src": "../img/avatar.png",
               "alt": "profile image"
            }
         },
         "likes":[
            {
               "name": "Eslam Ayman",
               "id": 0,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
         ],
         "comments":[
            {
               "name": "Ploy Adams",
               "id": 0,
               "content": "يبدو رأعً",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Ahmed Mohammed",
               "id": 0,
               "content": "حصل 😢",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
            
         ]
      },
      {
         "content": "‏ماذا لو أخبرتكِ، بأن الحديث معك يشفي كل مابقلبي.",
         "user": {
            "name": "Eman Elsayed",
            "id": 0,
            "img":{
               "src": "../img/avatar.png",
               "alt": "profile image"
            }
         },
         "likes":[
            {
               "name": "Eslam Ayman",
               "id": 0,
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
         ],
         "comments":[
            {
               "name": "Ploy Adams",
               "id": 0,
               "content": "يبدو رأعً",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            },
            {
               "name": "Ahmed Mohammed",
               "id": 0,
               "content": "حصل 😢",
               "img":{
                  "src": "../img/avatar.png",
                  "alt": "profile image"
               }
            }
            
         ]
      }

   
   ];

window.onload = () => {
   localStorage.setItem('currentID', 1201425454);
   CollectAllPosts();
}


CollectAllPosts = () => {

   for (let post = 0; post < posts.length; post++) {
      const _post = posts[post];

      postscontainer.innerHTML += `
            <article class="article_box">
               <div class="article_header">
                  <div class="article_user_info">
                     <img src="${ _post.user.img.src }" alt="article ${ _post.user.img.alt }">
                     <span class="name">
                         ${ _post.user.name }
                     </span>
                  </div>

                  <div class="article_box_content">
                     <p class="content" dir="auto">
                        ${ _post.content }
                     </p>
                  </div>

                  <div class="article_controls" data-index="${post}">
                     <button class="btn_controls btn_like" data-for="likes">
                        <span class="length">${ _post.likes.length }</span>
                        <i class="far fa-thumbs-up"></i>
                     </button>
                     <button class="btn_controls btn_comments" data-for="comments">
                        <span class="length">${ _post.comments.length }</span>
                        <i class="far fa-comment"></i>
                     </button>
                  </div>
               </div>

               <!-- models containers -->

            <div class="container_popup" data-index="${post}">
            
               <!-- likes popup ${post} -->

                  <div class="popup_box" data-for="likes" data-for="model_${post}">

                        <div class="popup_header">
                           <h2 class="popup_title">التفاعلات</h2>
                           <button class="btn_close">
                              <i class="fas fa-times"></i>
                           </button>
                        </div>

                        <div class="popup_content" data-index="${post}">
                        <!-- likes content all likes and users here ${post} -->
                        <div class="popup_content_box">
                        
                        </div>
                        </div>

                  </div>

                  <!-- comments popup ${post} -->

                  
                  <div class="popup_box" data-for="comments" data-for="model_${post}">

                        <div class="popup_header">
                           <h2 class="popup_title">التعليقات</h2>
                           <button class="btn_close">
                              <i class="fas fa-times"></i>
                           </button>
                        </div>

                        <div class="popup_content" data-index="${post}">
                              <!-- comment content all comments and users here ${post} -->
                              <div class="popup_content_box">
                        
                        </div>
                        </div>
                        
                  </div>
            </div>
            </article>
            `;
      

      //collect all likes and comments inside their popup box

      CollectLikesInsidePoupup(_post.likes, post);
      CollectCommentsInsidePoupup(_post.comments, post);

      //check buttons functions


      //close button to close all popup and their container
      CloseButtonPopup();

      //likes and comments function when click open the current popup with the attribute data for
      ArticleButtonsReactions();
      
     

   
   }

   
}

function CollectLikesInsidePoupup(likespopup , id) {

   const popupContents = document.querySelector(`.container_popup[data-index="${id}"] .popup_box[data-for="likes"] .popup_content_box`);
   
   for (let like = 0; like < likespopup.length; like++) {
      const _like = likespopup[like];

      popupContents.innerHTML += `<div data-index="${like}" class="popup_item"><a class="popup_user" href="/users/~${_like.id}"><img class="popup_user_image" src="${_like.img.src}" alt="${_like.img.alt}"><span class="popup_user_name">${_like.name}</span></a></div>`

   }
   
}

function CollectCommentsInsidePoupup(commnetspopup , id) {

   const popupContents = document.querySelector(`.container_popup[data-index="${id}"] .popup_box[data-for="comments"] .popup_content_box`);
   
   for (let comment = 0; comment < commnetspopup.length; comment++) {
      const _comment = commnetspopup[comment];

      popupContents.innerHTML += `<div data-index="${comment}" class="popup_item"><a class="popup_user" href="/users/~${_comment.id}"><img class="popup_user_image" src="${_comment.img.src}" alt="${_comment.img.alt}"><span class="popup_user_name">${_comment.name}</span></a><p class="content">${_comment.content}</p></div>`

   }
   
}


function CloseButtonPopup() {
   const btnclose = document.querySelectorAll('.btn_close');

      btnclose.forEach(close => {
         let itparentelement = close.parentElement.parentElement;
         let itparentelementparent = close.parentElement.parentElement.parentElement;

         close.onclick = () => {
            if (itparentelement.classList.contains('popup_active')) {
               itparentelement.classList.remove('popup_active');
               itparentelementparent.classList.remove('container_opened');
            }
            
         }


      });
}

function ArticleButtonsReactions() {
   
    const buttonscontrol = document.querySelectorAll('.btn_controls');
      

      buttonscontrol.forEach(btn => {
         let itdfor = btn.dataset.for;
         let itdindex = btn.parentElement.dataset.index;
         let articlecontainerreactionsandcomments = document.querySelector(`.container_popup[data-index="${ itdindex }"]`);

         //open poppup boxs and their parent container

         //react on article juct when click

         btn.onclick = () => ReactOnArticle(itdfor, btn, itdindex);
         
         btn.ondblclick = e => {
            e.preventDefault();
            
            let currentpopup = articlecontainerreactionsandcomments.querySelector(`.popup_box[data-for="${ itdfor }"]`);
            
            articlecontainerreactionsandcomments.classList.add('container_opened');
   
            currentpopup
               ? currentpopup.classList.add('popup_active')
               : currentpopup.classList.remove('popup_active');
            

         }

      });
}

function  ReactOnArticle(dfor , currentbutton , dindex) {
      dfor === 'likes'
      ? _LikeFunction(currentbutton, currentbutton.parentElement , dindex)
      : '';
}
function _LikeFunction(elem, itparent , id) {


   const postID = id;
   const CurrentID = localStorage.getItem('currentID');

   const PostLikes = posts[postID].likes;

   elem.classList.toggle('liked');
   PostLikes.forEach(_like => {

      CheckIfThecuurentUserLikeTheArtcileOrNot(_like, CurrentID, PostLikes);
      
      
      
   })
}

function CheckIfThecuurentUserLikeTheArtcileOrNot(like , ID , likes) {

   if (like.id !== Number(ID)) {

         // elem.classList.add('liked');

         likes.push({
            // ...PostLikes,
            "name": "Email Elsayed",
            "id": Number(localStorage.getItem('currentID')),
            "img": {
               "src": "../img/avatar.png",
               "alt": "profile image"
            }
         });


      } else {
         
         // elem.classList.remove('liked');

         const Index = likes.indexOf(like);

         likes.splice(Index, 1);
         
      }
}