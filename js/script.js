document.querySelector('.menu-toggle').onclick=()=>{
  document.querySelector('.nav-links').classList.toggle('active');
};
document.getElementById('contactForm').onsubmit=e=>{
  e.preventDefault();
  alert('Message sent successfully!');
};
