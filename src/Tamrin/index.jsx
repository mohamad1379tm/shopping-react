import { Component } from "react";

import "./style.css"

export default class Main extends Component{
    // const[value , setValue] = useState()
    constructor(){
        super()
        this.state = {
            data : [],
        }
        fetch('https://fakestoreapi.com/products?limit=16')
        .then(res=>res.json())
        .then(json=>{
            // console.log(json[0].id);
            // console.log(json);
            this.setState({
                data : json
            })
        })
    }
    name = ()=> {
        let para = document.querySelectorAll('.button-value')
        para.forEach((item)=>{
            console.log(item);
        })
    }
    componentDidMount(){
        // console.log('moha');
        this.name()
    }

    
    render(){

        let json1 = this.state.data
        return(
            <div className="row">
                <div className="main">
                    <div className="header">
                        <ul className="indicator m-0">
                            <li data-filter="all" className="Active">
                                <a href="#">All</a>
                            </li>

                            <li data-filter="Blazer">
                                <a href="#">men's clothing</a>
                            </li>

                            <li data-filter="Watch">
                                <a href="#">women's clothing</a>
                            </li>

                            <li data-filter="Shoes">
                                <a href="#">jewelery</a>
                            </li>

                            <li data-filter="Mobile">
                                <a href="#">electronics</a>
                            </li>

                            <li data-filter="Accessories">
                                <a href="#">Accessories</a>
                            </li>
                        </ul>
                        <div className="filter-condition">
                            <span>view as a</span>
                            <select  onChange={this.mohamad}  name="" id="select">
                                <option value="defalt">defalt</option>
                                <option value="LowTohigh">Low to high</option>
                                <option value="HighTolow">High to low</option>
                            </select>
                        </div>

                    </div>

                </div>
                <div className="product-field">
                    <ul className="items">
                        {json1.map((item)=>{
                            return(
                                <li id="Li" className={item.category} data-category={item.price}>
                                    <figure>
                                        <img src={item.image} alt="#" />
                                    </figure>
                                    <div className="detail">
                                        <p className="icon">
                                            <span><i className="bi bi-suit-heart"></i></span>
                                            <span><i className="bi bi-share"></i></span>
                                            <span><i className="bi bi-basket-fill"></i></span>
                                        </p>
                                        <strong>{item.id}</strong>
                                        <span>{item.category}</span>
                                        <small className="button-value">By now</small>
                                    </div>

                                    <h4>{item.price}$</h4>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}
















