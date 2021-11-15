import db from "../db";
import fire from "../fire";

function Fetchedtodos(props) {
  const Data = {
    FirstName: props.fname,
    LastName: props.lname,
    Todo_Decription: props.todo,
    Todo_Date: props.date,
    User: props.useremail,
  };

  function deletedata(e) {
    fire
      .database()
      .ref("todos")
      .child(props.id)
      .remove()
      .then(console.log("Deleted"));
  }

  return (
    <div className="flex sm:m-2 md:p-2 sm:p-1 mt-3 bg-black rounded-3xl">
      <div className="w-1/5 sm:w-1/5 m-1 md:w-36 text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-white font-serif text-black">
        {props.fname}
      </div>
      <div className="w-1/5 sm:w-1/5 m-1 md:w-36 text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-white font-serif text-black">
        {props.lname}
      </div>
      <div className="w-2/5 sm:w-2/5 m-1 md:w-72 break-words h-auto items-center align-middle text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-white font-serif text-black">
        {props.todo}
      </div>
      <div className="w-1/5 sm:w-1/5 m-1 md:w-40 text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-white font-serif text-black">
        {props.date}
      </div>
      <div className=" text-center rounded-3xl font-serif text-black m-auto ">
        <button
          className=" bg-yellow-200 md:p-3 sm:p-1 rounded-3xl "
          type="submit"
          onClick={deletedata}
        >
          X
        </button>
      </div>
    </div>
  );
}
export default Fetchedtodos;
