import React, { useState } from "react";
import db from "../db";
import fire from "../fire";

function Addtodo() {
  const user = fire.auth().currentUser.email;
  const [firstn, setFirstn] = useState(null);
  const [lastn, setLastn] = useState(null);
  const [todo, setTodo] = useState(null);
  const [date, setDate] = useState(null);

  function getFristn(val) {
    setFirstn(val.target.value);
  }
  function getLastn(val) {
    setLastn(val.target.value);
  }
  function getTodo(val) {
    setTodo(val.target.value);
  }

  function getDate(val) {
    setDate(val.target.value);
  }

  const Data = {
    FirstName: firstn,
    LastName: lastn,
    Todo_Decription: todo,
    Todo_Date: date,
    User: user,
  };

  function postdata(e) {
    e.preventDefault();
    db.post("/todos.json", Data).then((response) => {
      console.log("Posted");
    });
  }

  return (
    <div className="bg-yellow-100  md:mt-12 md:ml-56 sm:mt-12 sm:ml-24 rounded-2xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2 ">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            onChange={getFristn}
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            onChange={getLastn}
          />
        </div>
      </div>
      <div className="">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Your Note :
        </label>
        <textarea
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          id="grid-first-name"
          type="text"
          placeholder="Your Note"
          onChange={getTodo}
        />
      </div>
      <div className="">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
          date :
        </label>
        <input
          id="grid-first-name"
          type="date"
          placeholder="Your Note"
          onChange={getDate}
        />
      </div>

      <button
        className="bg-yellow-200 w-1/4 p-1 rounded-3xl m-auto mt-2  font-bold"
        type="submit"
        onClick={postdata}
      >
        Submit
      </button>
    </div>
  );
}

export default Addtodo;
