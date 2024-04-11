import { IProduct } from "../Card/types";
import React from "react";
import "./style.css"

export const ProductDetail: React.FunctionComponent<IProduct> = ({ ...product }) => {  
    return (
    <div className=" py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover border-gray-900 border-opacity-70 rounded-xl" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image"/>
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <div className="CountersNumericV4WProgress w-full h-44 mb-5 relative">
                        <div className="bg-gray-100 w-full h-44 left-0 top-0 absolute border border-neutral-900 border-opacity-70 rounded-xl">
                            <div className="AmountR top-[110px] absolute text-right text-black text-sm font-bold leading-tight" style={{right: "7%"}}>379</div>
                            <div className="AmountL left-[24px] top-[110px] absolute text-black text-sm font-bold leading-tight">20.06.2024</div>
                            <div className="ElementProgressBarsMedium w-full h-1 left-[24px] top-[86px] absolute">
                              <div className="Bg h-1 left-0 top-0 static bg-white bg-opacity-90 rounded-sm" style={{width: "80%"}}></div>
                              <div className="Progress w-48 h-1 left-0 top-0 absolute bg-amber-300 rounded-sm"></div>
                            </div>

                            <div className="SubtitleR top-[133px] absolute text-right text-zinc-500 text-xs font-medium leading-none" style={{right: "7%"}}>Days left</div>
                            <div className="SubtitleL left-[24px] top-[133px] absolute text-zinc-500 text-xs font-medium leading-none">Expiration date</div>
                            <div className="Amount left-[24px] top-[41px] absolute text-black text-lg font-extrabold leading-normal">$6,900.00</div>
                            <div className="Title left-[24px] top-[15px] absolute text-zinc-500 text-sm font-normal leading-tight">Accured interest</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                        <div className="flex items-center mt-2">
                            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                        </div>
                    </div>

                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex -mx-2 mb-4 mt-4">
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                        </div>
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{display: "none"}} className="modal-gralcont">
            <div className="form-gral">
              <form className="form">
                <div className="payment--options">
                  <button name="paypal" type="button">
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 124 33"
                      height="33px"
                      width="124px"
                      y="0px"
                      x="0px"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Path data */}
                    </svg>
                  </button>
                  <button name="apple-pay" type="button">
                    <svg
                      xmlSpace="preserve"
                      viewBox="0 0 512 210.2"
                      height="39"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Path data */}
                    </svg>
                  </button>
                  <button name="google-pay" type="button">
                    <svg
                      fill="none"
                      viewBox="0 0 80 39"
                      height="39"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Path data */}
                    </svg>
                  </button>
                </div>
                <div className="separator">
                  <hr className="line" />
                  <p>or pay using credit card</p>
                  <hr className="line" />
                </div>
                <div className="credit-card-info--form">
                  <div className="input_container">
                    <label htmlFor="password_field" className="input_label">
                      Card holder full name
                    </label>
                    <input
                      id="password_field"
                      className="input_field"
                      type="text"
                      name="input-name"
                      title="Input title"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="input_container">
                    <label htmlFor="password_field" className="input_label">
                      Card Number
                    </label>
                    <input
                      id="password_field"
                      className="input_field"
                      type="number"
                      name="input-name"
                      title="Input title"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="input_container">
                    <label htmlFor="password_field" className="input_label">
                      Expiry Date / CVV
                    </label>
                    <div className="split">
                      <input
                        id="password_field"
                        className="input_field"
                        type="text"
                        name="input-name"
                        title="Expiry Date"
                        placeholder="01/23"
                      />
                      <input
                        id="password_field"
                        className="input_field"
                        type="number"
                        name="cvv"
                        title="CVV"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <button className="purchase--btn">Checkout</button>
              </form>
            </div>
        </div>
    </div>

    );
  };
 ProductDetail
export default ProductDetail;



