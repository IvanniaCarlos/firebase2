const loggedOutlinks = document.querySelectorAll('.logged-out');
const loggedIntlinks = document.querySelectorAll('.logged-in');

export const loginCHECK = user => {
    //si el usuario existe ocultamos las bonotes necesarios
   if (user){
    loggedIntlinks.forEach(link => link.style.display = 'block');
    loggedOutlinks.forEach(link => link.style.display = 'none');
   }
else {
    loggedIntlinks.forEach(link => link.style.display = 'none');
    loggedOutlinks.forEach(link => link.style.display = 'block');
}
}