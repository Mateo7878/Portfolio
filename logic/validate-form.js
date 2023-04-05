export function validateForm() {
    const name = document.forms["contact-form"]["name"];
    const email = document.forms["contact-form"]["email"];
    const subject = document.forms["contact-form"]["subject"];
    const message = document.forms["contact-form"]["message"];
  
    if (name.value === "") {
      name.classList.add("error");
      document.getElementById("name-error").textContent = "Por favor ingresa tu nombre";
    } else {
      name.classList.remove("error");
      document.getElementById("name-error").textContent = "";
    }
  
    if (email.value === "") {
      email.classList.add("error");
      document.getElementById("email-error").textContent = "Por favor ingresa tu correo electrónico";
    } else {
      email.classList.remove("error");
      document.getElementById("email-error").textContent = "";
    }
  
    if (subject.value === "") {
      subject.classList.add("error");
      document.getElementById("subject-error").textContent = "Por favor ingresa el asunto";
    } else {
      subject.classList.remove("error");
      document.getElementById("subject-error").textContent = "";
    }
  
    if (message.value === "") {
      message.classList.add("error");
      document.getElementById("message-error").textContent = "Por favor ingresa tu mensaje";
    } else {
      message.classList.remove("error");
      document.getElementById("message-error").textContent = "";
    }
  
    if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
      return false;
    }
  
    return true;
  }
  