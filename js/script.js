const pwValidation = (e) => {
  const password = document.getElementById('reg_password').value;
  const passwordConfirm = document.getElementById('reg_password_confirm').value;
  if (password != passwordConfirm) {
    e.preventDefault();
    document.getElementById('pw_valid').innerHTML = '<p class="pw_valid"> Hasła nie są ze sobą zgodne. </p>';
  } else {
    document.getElementById('pw_valid').innerHTML = '';
  }
}
const submitFirst = document.getElementById('first_submit');
submitFirst.addEventListener('click', pwValidation);

/*
const submitFirst = document.getElementById('first_submit');
submitFirst.addEventListener('click', function(e){
  const password = document.getElementById('reg_password').value;
  const passwordConfirm = document.getElementById('reg_password_confirm').value;
  if (password != passwordConfirm) {
    e.preventDefault();
    document.getElementById('pw_valid').innerHTML = '<p> Hasła nie są ze sobą zgodne </p>';
  }
});*/
