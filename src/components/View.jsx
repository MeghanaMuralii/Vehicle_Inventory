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
      <th scope="col">Brand</th>
      <th scope="col">Fuel Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">KA-01-AB-1234</th>
      <td>Car</td>
      <td>TATA</td>
      <td>Diesel</td>
    </tr>
    <tr>
      <th scope="row">DL-04-CR-5678</th>
      <td>Car</td>
      <td>BMW</td>
      <td>Petrol</td>
    </tr>
    <tr>
      <th scope="row">MH-19-AG-5465</th>
      <td>Car</td>
      <td>Mahindra</td>
      <td>Electric</td>
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