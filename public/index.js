




$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {               //chack if user connected , if connect sends him to shop page
        if (user) {
          window.location.href="./shop.html";
        } else {
          // No user is signed in.
        }
      });
    const loggin=async()=>{                               //login actions ( check user, clear inputs...)
    const em=$("#email").val();
    const pass=$("#password").val();
    const us= await firebase.auth().signInWithEmailAndPassword(em,pass).then(function(firebaseUser) {
        window.location.href="./shop.html";
        }).catch(function(error) {
        $("#email").val("");
        $("#password").val("");
        $("#login_problem").html("password/email is not correct");
      });
    


};

$("#login").on('click',loggin);               //login listener



});