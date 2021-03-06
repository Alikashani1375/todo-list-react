import React from "react";
import db from "../db";
import Fetchedtodos from "./Fetchedtodos";
import fire from "../fire";

class Today extends React.Component {
  todos = [];
  state = {
    results: null,
  };

  componentDidMount() {
    db.get("/todos.json").then((response) => {
      console.log("Fetched");
      const fetchedData = [];
      for (let key in response.data) {
        fetchedData.push({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ results: fetchedData });
    });
  }

  isToday(someDate) {
    const today = new Date();
    let d = someDate.split("-");
    console.log(
      +d[2],
      today.getDate(),
      +d[1],
      today.getMonth(),
      +d[0],
      today.getFullYear()
    );
    return (
      +d[2] === today.getDate() &&
      +d[1] - 1 === today.getMonth() &&
      +d[0] === today.getFullYear()
    );
  }

  render() {
    return (
      <div>
        <div className="flex md:mt-12 mt-4 sm:m-2 md:p-2 sm:p-1 mt-3 bg-black rounded-3xl">
          <div className="w-1/5 sm:w-1/5 m-1 md:w-36 text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-yellow-200 font-serif text-black">
            First Name
          </div>
          <div className="w-1/5 sm:w-1/5 m-1 md:w-36 text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-yellow-200 font-serif text-black">
            Last Name
          </div>
          <div className="w-2/5 sm:w-2/5 m-1 md:w-72 whitespace-nowrap items-center align-middle text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-yellow-200 font-serif text-black">
            Your Todo
          </div>
          <div className="w-1/5 sm:w-1/5 m-1 md:w-40 text-sm text-center sm:w-24 md:text-2xl md:ml-3 rounded-3xl p-2 md:p-3 bg-yellow-200 font-serif text-black">
            Date
          </div>
        </div>

        {this.state.results ? (
          this.state.results
            .filter((result) => this.isToday(result.Todo_Date))
            .filter((result) => result.User === fire.auth().currentUser.email)
            .map((result) => (
              <Fetchedtodos
                key={result.id}
                fname={result.FirstName}
                lname={result.LastName}
                todo={result.Todo_Decription}
                date={result.Todo_Date}
              />
            ))
        ) : (
          <span class="inline-flex rounded-full h-3 w-3 bg-purple-500 animate-ping"></span>
        )}
      </div>
    );
  }
}
export default Today;
