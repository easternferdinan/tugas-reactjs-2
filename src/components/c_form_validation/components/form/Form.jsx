import React, { Component } from 'react'
import "./style/form.css"

export default class Form extends Component {

  state = {
    fullname: "",
    gender: "",
    role: "",
    email: "",
    agreement: false,
  }

  submit = (event) => {
    event.preventDefault();
    this.setState({
      fullname: event.target.elements.FullName.value,
      gender: event.target.elements.Gender.value,
      role: event.target.elements.Role.value,
      email: event.target.elements.Email.value,
      agreement: event.target.elements.Agreement.checked
    }, () => {

      const {fullname, gender, role, email, agreement} = this.state;

      let errorMessage = [];

      if (fullname === "") {
        errorMessage = [...errorMessage, "- Name can't be empty\n"];
      }

      if (gender === "") {
        errorMessage = [...errorMessage, "- Please select your gender\n"];
      }

      if (role === "") {
        errorMessage = [...errorMessage, "- Please select your role\n"];
      }

      if (email === "") {
        errorMessage = [...errorMessage, "- Email can't be empty\n"];
      }

      if (agreement === false) {
        errorMessage = [...errorMessage, "- You must agree with our terms and conditions\n"];
      }

      if (errorMessage.length > 0) {
        alert("," + errorMessage)
      } else {
        alert(`
          Name: ${fullname}
          Gender: ${gender}
          Role: ${role}
          Email: ${email}
          Agree to T&C: ${agreement}
          `
        )
      }

    });
  }

  render() {
    return (
      <form className='formContainer' onSubmit={this.submit}>
        <div className="form">
          <label>Name:</label>
          <input type="text" placeholder='Full name' name='FullName' />
        </div>
        <div className="form">
          <label>Gender:</label>
          <div className="genderRadio">
            <input type="radio" name="Gender" id="male" value="Male" />
            <label htmlFor="male"> Male </label>
            <input type="radio" name="Gender" id="female" value="Female" />
            <label htmlFor="female"> Female </label>
          </div>
        </div>
        <div className="form">
          <label>Role:</label>
          <select name="Role">
            <option value="">Select Role</option>
            <option value="Intern">Intern</option>
            <option value="Jr. Developer">Jr. Developer</option>
            <option value="Sr. Developer">Sr. Developer</option>
          </select>
        </div>
        <div className="form">
          <label>Email:</label>
          <input type="email" placeholder="email@example.com" name="Email" />
        </div>
        <div className="form-checkbox">
          <input type="checkbox" name="Agreement" id="tncAgreement" value="off" />
          <label htmlFor="tncAgreement"> I agree with the terms & condition.</label>
        </div>
        <div className="form">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}
