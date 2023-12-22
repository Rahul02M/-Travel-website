import React from "react";
import Button from "./layouts/Button";
import img from "../assets/img/contact.jpg";
import { Link } from "react-scroll";

const Contact = () => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <form
          className="w-full lg:w-2/5 space-y-5 bg-[#d4d4d4d8]
        p-5 rounded-xl "
        >
          <h1 className="text-4xl font-semibold text-center">Contact Form</h1>
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="userName">
              Full Name{" "}
            </label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="useName"
              id="userName"
              placeholder="Enter you name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="userEmail">
              Email{" "}
            </label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all "
              type="text"
              name="email"
              id="userEmail"
              placeholder="Enter you email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="userMessage">
              {" "}
              Message{" "}
            </label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div className="flex flex-row justify-center">
            <Button title="submit" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className=" rounded-lg" src={img} alt="img" />
          <p className="text-center pt-4 text-gray-500 font-semibold">
            we'd love to hear from you! Whether you have question, feedback, or
            need assistance with your travel plans, please don't hesitate to
            reach out. Our team is here to assist you every step of the
            way.Simply fill out form below, and we,ll be in touch shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
