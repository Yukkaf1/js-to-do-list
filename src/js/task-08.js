


const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit );

function onFormSubmit (event) {
  event.preventDefault();
 
  const formEl = event.currentTarget.elements;
    // console.dir(formEl);  

  const email = formEl.email.value;

  const password = formEl.password.value;

  if (email === "" || password === "") {
    return alert("Заполните все поля");
  }
  const userData={}

  const formData = new FormData(event.currentTarget);
  console.log(formData) 
  formData.forEach((value, name)=>{
    userData[name]=value
  })


  console.log(userData)

  


  // form.reset();

}
