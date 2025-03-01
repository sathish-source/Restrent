import "./Home.css"
import image1 from './images/Cheif.jpg'
import image2 from './images/Customer.jpg'
import image3 from './images/BlackRise.jpg'

const Home = () => {
    return (
        <div>
            <div className="image-card">
                <div className='image-content p-5'><h1 id="title" className="display-1 pacifico-regular fw-bolder text-white">Welcome to</h1>
                    <h1 className="display-1 fw-bolder text-warning">
                        Grand restaurant
                    </h1>
                    <p className="h4 mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna Risus.</p>
                    <button className="px-5 p-4 bg-warning mt-3">Order Now</button>
                </div>
            </div>

            <div className="section-1 d-flex ">
                <div className="d-flex col-6 justify-content-end m-5" >
                    <img className="img-customer" src={image2} alt="Restaurent" />
                    <img className="img-cheif" src={image1} alt="Restaurent" />
                </div>
                <div className="me-5">
                    <h4 className="display-2 fw-normal pacifico-regular text-warning my-5">Welcome at</h4>
                    <h1 className="display-1 fw-bolder my-5">Grand Restaurant</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                    <h4 className="read-about my-5 display-4 ps-4">About Us</h4>
                </div>
            </div>

            <div className="food-recomand">
                <div>
                    <h1 className="display-2 fw-normal pacifico-regular text-white ">Chef Recommended</h1>
                    <p className="display-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </div>
            <div className="d-flex text-center mx-5 m-5 ">
                <div className="p-5">
                    <h1 className=" display-4 fw-bold pacifico-regular text-black">Food Menus</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
            </div>

            <div className="d-flex justify-content-center ">
                <div className="m-5 my-5 pt-5">
                    <img src={image3} alt="food" height={600} />
                </div>
                <div className="m-5">
                    <div className="section-2">
                        <div className="d-flex justify-content-between  my-4 ">
                            <h2 className="fw-bold"># Black Rice with Squid</h2><h2  >$50</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />do eiusmod tempor incididunt ut labore et dolore magna<br /> aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <div  className="section-2">
                        <div className="d-flex justify-content-between my-4">
                            <h2 className="fw-bold"># The green dragon in tobiko</h2><h2 className="ms-3">$30</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />do eiusmod tempor incididunt ut labore et dolore magna <br />aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <div  className="section-2">
                        <div className="d-flex justify-content-between my-4">
                            <h2 className="fw-bold"># Black Rice with Squid</h2><h2 className="ms-3" >$40</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br /> do eiusmod tempor incididunt ut labore et dolore magna<br /> aliqua. Quis ipsum suspendisse ultrices.</p>
                    </div>
                    <button className="bg-warning text-white my-5 px-4 p-3">SEE ALL MENU</button>
                </div>
            </div>
            <div className="food1-recomand my-5">
                <div>
                    <h1 className="display-2 fw-normal pacifico-regular text-white ">Popular Dishes</h1>
                    <p className="display-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </div>


        </div>

    )
}
export default Home