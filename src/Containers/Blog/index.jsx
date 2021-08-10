import React, { Component } from "react";
import Image from "../../img/samsungtv.jpg";
import axios from "axios"

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          name: "Samaung smart TV 1",
          description: "this is a description of the product",
          imgurl:
            "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          name: "Samaung smart TV 2",
          description: "this is a description of the product",
          imgurl:
            "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          name: "Samaung smart TV 3",
          description: "this is a description of the product",
          imgurl:
            "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
      users: [],
    };
  }
  componentDidMount() {
    //API calls are done here

    //Example for fetch api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ ...this.state, users: data });
        console.log(this.state.users)
      });

      //example for AXIOS

      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
           console.log(res);
      })

      axios.post("https://jsonplaceholder.typicode.com/users",{
        id: 10,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }).then((res) => {
        console.log(res)
      })

      axios.put("https://jsonplaceholder.typicode.com/users/1",{
        
        name: "John Snow",
        username: "Bret",
        email: "JohnSnow@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }).then((res)=>{
        console.log(res)
      })

      axios.delete("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        console.log(res)
      })
  }
  render() {
    let allBlogs = this.state.blogs.map((item, index) => {
      return (
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.imgurl} className="card-img-top" alt="tv" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">
                View More{" "}
              </a>
            </div>
          </div>
        </div>
      );
    });

    let dataTables = this.state.users.map((item)=>{
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
              </tr>
        )
    })

    
    return (
      <>
        <h1>Blog</h1>
        <section>
          <div className="container">
            <div className="row">{allBlogs}</div>
            <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-4 mt-5">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {dataTables}
            </tbody>
          </table>
        </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Blogs;
