import axios from "axios";
import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";
import "../settings.scss";
// import { axiosInstance } from "../../../../util/axiosConfig";

interface IProps {
  userId: number
}

const BasicInfoForm: React.FC<IProps> = (props: IProps) => {
  
  const updateBasicInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usernameF = event.currentTarget["username"].value;
    const firstNameF = event.currentTarget["firstName"].value;
    const lastNameF = event.currentTarget["lastName"].value;

    // <Spinner color='success' />
    // document.getElementById("reimbTableBody").append(tr);
    const response = await axios.post(
      "http://localhost:8080/MochiCircle/api/users/",
      {
        userId: props.userId,
        username: usernameF,
        password: null,
        firstName: firstNameF,
        lastName: lastNameF,
        email: null,
        pic: null,
        status: null,
        bio: null,
        interests: null,
      }
    );

    const json = response.data;
    if(json.username===usernameF) {
      alert("Info successfully updated!");
    } else {
      alert("Sorry, but it seems like that username is already taken!");
    }
    
    // console.log(json);
    // console.log("test");
  };

  return (
    <div>
      <h3>Basic Info{/* <Spinner color='warning' /> */}</h3>
      <Form onSubmit={updateBasicInfo} className="settingsBox" method="POST">
        <div className="whiteText">Username</div>
        <Input
          type="text"
          name="username"
          required
          placeholder="current username"
        />
        <br />
        <div className="whiteText">First Name</div>
        <Input
          type="text"
          name="firstName"
          required
          placeholder={"current first name"}
        />
        <br />
        <div className="whiteText">Last Name</div>
        <Input
          type="text"
          name="lastName"
          required
          placeholder="current last name"
        />
        <br />
        <Input type="submit" value="Update info" className="btn btn-success" />
      </Form>
    </div>
  );
};

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
  return {
    userId: appState.loginState.id
  }
}

//HRO export right here
export default connect<IProps>(mapStateToProps)(BasicInfoForm);