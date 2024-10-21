// import "../../Component/Profile/Profile.css"
import "../../Component/Profile/Profile.jsx"
import "../../Component/Product/Product.jsx"
// import "../../Component/Product/Product.css"
import "../../Component/Blog/Blog.jsx"
// import "../../Component/Blog/Blog.css"
import "../../Component/Button/Button.jsx"
import David from "../../assets/svg/David.webp"
import girlie from "../../assets/svg/girlie.webp"
import boy from "../../assets/svg/boypic.jpg"
import gurl from "../../assets/svg/moodgurl.jpg"
import image from "../../assets/svg/image.png"
import fineboy from "../../assets/svg/fineboy.webp"
import Profile from "../../Component/Profile/Profile.jsx"
import Product from "../../Component/Product/Product.jsx"
import makeup from "../../assets/svg/makeupkit.jpg"
import bag from "../../assets/svg/brownbag.avif"
import headphone from "../../assets/svg/headphone.png"
import phone from "../../assets/svg/phone.webp"
import macbook from "../../assets/svg/macbook.jpg"
import Blog from "../../Component/Blog/Blog.jsx"
import Button from "../../Component/Button/Button.jsx"


function Home() {
    return(
        <>
        <div className="mainContainer">
        <div className="card">
           <Profile className = "profile1" id = "class1"
                   img = {image} alt = "" 
                   name = "Name: Aanya Aditi" 
                   age= "Age: 19" 
                   location = "Location: India"
                   onclick = {()=> {darkmode("class1")}}/>
           <Profile className = "profile2" 
                   id = "class2"
                   img = {fineboy} alt = "" 
                   name = " Name: Ahmad Ibrahim" 
                   age = " Age: 29" 
                   location = "Location: Abuja"
                   onclick = {()=> {darkmode("class2")}}/>
           <Profile className = "Profile3" 
                   id = "class3"
                   img = {gurl} alt = "" 
                   name = "Name:Monalisa Jacobs" 
                   age = "Age: 25" 
                   location = "Location: Dolphin Estate"
                   onclick = {()=> {darkmode("class3")}}/>
           <Profile className = "profile4" 
                   id ="class4"
                   img = {boy} alt = "" 
                   name = "Name: Joshua Ezekiel" 
                   age = "Age: 40" 
                   location = "Location: Canada"
                   onclick = {()=> {darkmode("class4")}}
                   />
           <Profile className = "Profile5" 
                 id ="class5"
                   img = {girlie} alt = "" 
                   name = "Ariyike Ogunmodede" 
                   age = "Age: 35"
                   location = " Location: United Kingdom"
                   onclick = {()=> {darkmode("class5")}}/>
           <Profile  className = "profile6" 
                    id="class6"
                   img = {David} alt = "" 
                   name = " Name: David Aderopo" 
                   age = " Age: 20" 
                   location = "Location: Lokoja"
                   onclick = {()=> {darkmode("class6")}}
                  
                   />
                  
           


        </div>

        

        <div className="products">
            <Product className = "product1" 
                   img = {makeup} alt = ""
                   productName = "Product Name: Makeup kits" 
                   price= "Price: #123,000"
                   imgUrl = " https://www.u-buy.com.ng/product/7I8D4LHPY-58-colors-professional-makeup-kit-makeup-gift-set-with-eye-shadow-blush-lipstick-compact-powder-mascara-eyeliner-lip-liner-eyebrow-pencil"
                   description=" 58-colors-professional-makeup-kit-makeup-gift-set-with-eye-shadow-blush-lipstick-compact-powder-mascara-eyeliner-lip-liner-eyebrow-pencil"/>
            <Product className = "product2" 
                   img = {macbook} alt =""
                   productName = "Product Name: Macbook" 
                   price="Price: #2,000,000" 
                   imgUrl = " https://www.pexels.com/photo/macbook-pro-beside-white-ipad-4158/" 
                   description = "Description: photo/macbook-pro-beside-white-ipad"/>
            <Product className = "product3" 
                   img = {bag} alt = ""
                   productName = "Product Name: Bag" 
                   price ="Price: #20,000" 
                   imgUrl = "https://unsplash.com/photos/a-brown-leather-purse-with-a-long-strap-BXWGZgFhBuU" 
                   description = "Description: a-brown-leather-purse-with-a-long-strap"/>
            <Product className = "product4" 
                   img = {headphone} alt =""
                   productName = "Product Name: Headphone" 
                   price="Price:#50,000" 
                   imgUrl = "https://www.vecteezy.com/png/24841285-wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai" 
                   description = " Description: wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative"/>
           
            <Product className = "product6" 
                   img = {phone} alt = ""
                   productName = "Product Name: 3 in 1 Wireless Charger Station for iPhone, Apple Watch & AirPods" 
                   price ="Price: NGN 93991" 
                   imgUrl = " https://www.u-buy.com.ng/product/42P79L5C0-wireless-charger-hosaud-fast-charging-station-compatible-with-apple-watch-series-6-5-4-3-2-se-airpods-2-pro-iphone-12-series-11-series-se-xs" 
                   description = " Description: wireless-charger-hosaud-fast-charging-station-compatible-with-apple-watch-series-6-5-4-3-2-se-airpods-2-pro-iphone-12-series-11-series-se-xs"/> 
 


        </div>
        <div className="blogs">
            <Blog className = "blogs1" title = "Title: Stop sucking out poor members under guise of sowing seed - Pastor Kumuyi tells clergymen" 
            author = "Author: Linda Ikeji" 
            content = "Content: The General Superintendent, Deeper Life Christian Life Ministry, Pastor William Kumuyi, has asked his fellow clergymen should stop the act of sucking out their members financially under the guise of asking them to sowing seeds for financial prosperity." 
            date = "Date: 19/10/2024"/>
            <Blog className = "blogs2" 
            title="Title: Rebuttal of False News Reports Against GTCO's Business Activities, Results and Its Executive Management" 
            author ="Author: Uche" 
            content ="Content: Based on the incessant release of false news reports on GTCO's business activities, Results and its Management Team, it has become necessary to set the records straight and dispel attempts by certain groups to create a false narrative about the GTCO Brand and its Management.
            The false news articles which are being sponsored using the media, center around baseless allegations against the Group's business activities and its Executive Management." 
            date="Date: October 4, 2024"/>
            <Blog className= "blogs3" title ="Title: The Middle Road: Why the United States Needs a Dynamic Approach to Its Foreign Policy" 
            author =" Author: Karishma R. Mehta and Hunter Stoll" 
            content=" Content: The world finds itself in a precarious calm before a potential storm of great power rivalry. The United States is in yet another crucial presidential election cycle. Both tickets offer largely contrasting stances for America's position on the international stage. However, must America's approach to its role on the international stage be one of two extremes, or can it be more nuanced?" 
            date ="Date: Oct 11, 2024"/>
            <Blog className= "blogs4" title ="Title: How can I have this hot body with pr**k Bobrisky vows that he has removed his member as she shares video of bare backside" 
            author ="Author: Linda Ikeji" 
            content=" Content: How can I have this hot body with pr**k Bobrisky vows that he has removed his member as she shares video of bare backside. Bobrisky took to Instagram to share a video of his backside. 
            The crossdresser had on just red and black bra and panties in the video. 
            In the comment section, a follower started a conversation about his male member and if the crossdresser still has it. 
            Reacting, Bobrisky said: I swear is out... how can I have this hot body with pr**k? Ewww." 
            date ="Date: 17/10/2024"/>

        </div>
        </div>




        
        </>
    
    )
}

export default Home

function darkmode(id) {
            let theId = document.getElementById(id)

            console.log(theId);
            
            theId.classList.toggle("darkmode")
}