// Declaring variable to get a referennce to form in index.html
let form = document.getElementById("form");
// Adding submit event to form button
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Declaring variable with service id
  const id = "service_zp9ecdq";
  // Declaring variable with an email template
  const emailTempl = "template_0tmi3wk";

  emailjs.sendForm(id, emailTempl, this).then(() => {
    //Notifies the user that email was succsesfully sent
    alert("Email sent !!.Thank you for your email");
      // Resets form inputs
      form.reset();
  },
    (err) => {
      //Notifies the user about any possible errors occured with submission
      alert(JSON.stringify(err));
  });
});
