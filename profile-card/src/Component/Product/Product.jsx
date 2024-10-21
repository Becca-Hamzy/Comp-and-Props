
import "./product.css"
import makeup from "../../assets/svg/makeupkit.jpg"
const Product = ( {imgUrl,productName,img, price, description}) => {
    return( 

        
       <div className="product">
        <a  href={imgUrl}><img src={img} alt="" /></a> 
        <p>{productName}</p>
        <p>{price}</p>
        <p>{description}</p>



       </div>

    )
}
export default Product