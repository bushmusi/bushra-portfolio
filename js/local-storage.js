const formData = {
  name: '',
  email: '',
  desc: '',
};

function fillDatas() {
  let storageData = localStorage.getItem('form-data');
  storageData = JSON.parse(storageData);
  document.getElementById('input-name').value = storageData.name;
  document.getElementById('input-email').value = storageData.email;
  document.getElementById('input-desc').value = storageData.desc;
}

function populateDatas() {
  formData.name = document.getElementById('input-name').value;
  formData.email = document.getElementById('input-email').value;
  formData.desc = document.getElementById('input-desc').value;
  localStorage.setItem('form-data', JSON.stringify(formData));
  fillDatas();
}

const inputList = [];
inputList.push(document.getElementById('input-name'));
inputList.push(document.getElementById('input-email'));
inputList.push(document.getElementById('input-desc'));

inputList.forEach((value) => {
  value.onchange = function trig() { populateDatas(); };
});

if (!localStorage.getItem('form-data')) {
  populateDatas();
} else {
  fillDatas();
}
