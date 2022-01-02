---
title : "SAY HELLO!"
bg_image: ""
form_action: "https://formspree.io/f/xdobkarn" # works with https://formspree
name: "Name"
email: "Email"
message: "Message"
submit: "Submit"


# custom style
custom_class: ""
custom_attributes: ""
custom_css: "
.form-container input.form-control, .form-container textarea.form-control {
  border-radius: .2rem;
  background-color: #323232;
  color: beige;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 3px solid beige;
}
.form-container input::placeholder, .form-container textarea::placeholder {
  color: beige;
}
.form-container input:focus, .form-container textarea:focus {
  background: #777;
  transition: border-color .5s ease-in-out,box-shadow .5s ease-in-out;
  -webkit-transition: border-color .5s ease-in-out,box-shadow .5s ease-in-out;
}
}
.form-container button {
  background: beige;
  border-radius: .2rem!important;
}

.to-top .fa {
  border-radius: 1rem;

}
.contact:after {
  background: rgba(50, 50, 50, 0.6);
}
"
---
