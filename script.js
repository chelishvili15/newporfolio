/* projects */
const project1 = Object.values(document.getElementById('project1').children);
const project2 = Object.values(document.getElementById('project2').children);
const fullProject = project1.concat(project2);
const myProject = [
  'https://chelishvili15.github.io/trivia',
  'https://chelishvili15.github.io/tbcclone',
  'https://chelishvili15.github.io/numbers',
  'https://chelishvili15.github.io/TicTacToe',
  'https://chelishvili15.github.io/calcu',
  'https://chelishvili15.github.io/crocobetclone'
]
for (let i = 0; i < fullProject.length; i++){
  fullProject[i].children[0].innerHTML = myProject[i].slice(32, myProject[i].length)  
  fullProject[i].addEventListener('click',()=>{
    window.open(myProject[i])
  })
}
//___________________________________________________________________________________
/* Send Mail*/
const input = document.getElementById('contacts').children[0]; //input elementebi

function sendMail(){
  let obj = {
    from_name: input[2].value,
    to_name: 'chelo',
    message: input[0].value+input[1].value+input[3].value+input[4].value
  }
  emailjs.send('service_d8mlcxq','template_fce14io', obj)
  .then((res)=>{
    for (let i=0; i<5; i++){ 
      input[i].value = '';  //varestarteb inputebs
    }
    alert('message sent', res.status)
  })
}
//___________________________________________________________________________________
/* navbar */

const nav = document.getElementsByTagName('nav')[0].children;

for(let i = 1; i<=4; i++){
  nav[i].addEventListener('click', () =>{
    for(let j = 1; j<=4; j++){
      nav[j].classList.remove('w3-black') 
    }
    nav[i].classList.add('w3-black')
  })
}

