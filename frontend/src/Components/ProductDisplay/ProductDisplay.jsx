import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {

    const { product } = props;

    return (
        <div className='Productdisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay_img_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img className='productDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <div className="productDisplay-right-prices">
                    <div className="productDisplay-right-prices-old">${product.old_price}</div>
                    <div className="productDisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi id, perspiciatis ratione dolor in adipisci blanditiis beatae at laudantium, omnis porro amet pariatur. Animi maxime ipsum impedit vel quam natus.
                </div>
                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Add to Cart</button>
                <p className='productDisplay-right-category'><span>Category : </span>Women, T-Shirts, Crop-top</p>
                <p className='productDisplay-right-category'><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay