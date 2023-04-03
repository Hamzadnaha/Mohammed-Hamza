var form=document.getElementById("contact_form");
form.addEventListener('submit', function(e){
    e.preventDefault();
   }   );

   var database=firebase.database();
   database.ref('contacts').push(
    {
        name:Name,
        email:email,
        message:message
    }
   );
   form.reset();
   alertmessage('Thank you for your messages!, We appreciate your feedback and will get bck to you soon');
    