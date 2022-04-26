import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/userSlice";
import "./UpdateForm.scss";
import api from "../../api.js";

const UpdateForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);

  const updateFirstName = useRef();
  const updateLastName = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userActions.updateProfile(data));
    onClose();
  };

  return (
    <div className="update-form">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          Fist Name
          <input
            type="text"
            defaultValue={firstName}
            ref={updateFirstName}
            {...register("firstName", { maxLength: 80 })}
          />
        </div>
        <div className="form-content">
          Last Name
          <input
            type="text"
            defaultValue={lastName}
            ref={updateLastName}
            {...register("lastName", { maxLength: 100 })}
          />
        </div>
        <div className="form-button">
          <button type="submit" className="save-button">
            Save
          </button>
          <button onClick={onClose} className=" save-button cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateForm;
