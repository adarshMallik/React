import { useSelector } from "react-redux"

const Products = () => {
    const products = useSelector((state) => state.products);
    const Customers = useSelector((state) => state.customer);
     
    let allProducts = products.map((item, index) => {
        return (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.imgurl} className="card-img-top" alt="tv" />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <h6>Price: {item.price}</h6>
                <p className="card-text">{item.description}</p>
                <h4>Buyer Details</h4>
                {Customers.map((item) => 
                
                    <div>
                    <h5 className="card-text">{item.customerName}</h5>
                    <p className="card-text">{item.location}</p>
                    </div>
                )}
                <a href="#" className="btn btn-primary">
                  View More{" "}
                </a>
              </div>
            </div>
          </div>
        );
      });

    return (
        <section className="container">
            <div className="row">
                <h1>All Products</h1>
                <div className="col-md-12">
                    {allProducts}
                </div> 
            </div>
        </section>
    )
}

export default Products