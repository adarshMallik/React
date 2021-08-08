import React from "react"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Posts: [],
        };
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => {
            //Fetch the existing state using spread operator and update the users data
            this.setState({...this.state,Posts: data});
        })
    }
    render(){
        let posts = this.state.Posts.map((item)=> {
            return (

                <div class="card" style={{width: "18rem",margin:"50px 10px 10px 25px",boxShadow:"5px 10px 18px #888888"}}>
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  
                  <p class="card-text">{item.body}</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            )
        })
        return(
        <div className="container-fluid" style={{background:"lightpink"}}>
        <div class="row row-cols-1 row-cols-md-3 g-4 mx-auto">    
            {posts}
        </div>

        </div>
        )
    }

}

export default Home