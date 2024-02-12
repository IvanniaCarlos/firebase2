import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase/firebase.js";
import { loginCHECK } from "./firebase/login_check.js";

import'./firebase/singup_form.js'
import './firebase/logout.js'

onAuthStateChanged(auth, async (user) =>
{
  // si he ingresado
  if (user){
   loginCHECK(user);
  }
 // si he salido   
   else {
    loginCHECK(user);
   }

})