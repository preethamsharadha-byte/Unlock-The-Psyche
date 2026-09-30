
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
if(toggle){
  toggle.addEventListener('click',()=>nav.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>nav?.classList.remove('open'));
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('is-visible');
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-demo-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=form.querySelector('[data-form-status]');
    if(status){
      status.textContent='Thank you. This demo form is ready to connect to your preferred booking or email service.';
      status.hidden=false;
    }
  });
});
