import React from 'react'
import NavVehicle from './NavVehicle'

const View = () => {
  return (
    <div>
        <NavVehicle />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
  <thead>
    <tr>
      <th scope="col">Register No</th>
      <th scope="col">Vehicle Name</th>
      <th scope="col">Image</th>
      <th scope="col">Brand</th>
      <th scope="col">Fuel Type</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">KA-01-AB-1234</th>
      <td>Car</td>
      <td>
        <img src="https://spn-sta.spinny.com/blog/20220228140845/Tata-Harrier-Black-Edition.jpg" height="100" width="100"></img>
      </td>
      <td>TATA</td>
      <td>Diesel</td>
      <td>25.42 Lakh</td>
    </tr>
    <tr>
      <th scope="row">DL-04-CR-5678</th>
      <td>Car</td>
      <td>
        <img src="https://www.bmw.in/content/dam/bmw/common/topics/offers-and-services/bmw-special-sales-2020/protection-vehicle/bmw-css-7-series-protection-ms-new-standard.jpg" height="100" width="100"></img>
      </td>
      <td>BMW</td>
      <td>Petrol</td>
      <td>50.55 Lakh</td>
    </tr>
    <tr>
      <th scope="row">MH-19-AG-5465</th>
      <td>Car</td>
      <td>
        <img src="https://auto.mahindra.com/dw/image/v2/BKRC_PRD/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwc4930484/images/X3XO/large/S220_602x339.png?sw=360&sh=202" height="100" width="100"></img>
      </td>
      <td>Mahindra</td>
      <td>Electric</td>
      <td>30 Lakh</td>
    </tr>
  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View