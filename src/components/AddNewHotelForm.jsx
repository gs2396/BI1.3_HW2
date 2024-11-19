import React, { useState } from "react";

const categories =  ['Budget', 'Mid-Range', 'Luxury', 'Boutique', 'Resort', 'Other']; 
const priceRanges =  ['$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)', 'Other']

const AddNewHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: categories[0],
    location: "",
    rating: 0,
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: priceRanges[0],
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);
    try{
        const response = await fetch("http://localhost:3000/hotels",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if(!response.ok) {
            throw "Failed to add hotel."
        } 
        const data = await response.json()
        console.log("Added Hotel ", data)

    }catch(error){
        console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="0" max="5" step="0.1" />
      </div>
      <div>
        <label>Website:</label>
        <input type="text" name="website" value={formData.website} onChange={handleChange} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Check-In Time:</label>
        <input type="text" name="checkInTime" value={formData.checkInTime} onChange={handleChange} />
      </div>
      <div>
        <label>Check-Out Time:</label>
        <input type="text" name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} />
      </div>
      <div>
        <label>Amenities:</label>
        <input type="text" name="amenities" value={formData.amenities} onChange={handleChange} />
      </div>
      <div>
        <label>Price Range:</label>
        <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="reservationsNeeded" checked={formData.reservationsNeeded} onChange={handleChange} />
          Reservations Needed
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="isParkingAvailable" checked={formData.isParkingAvailable} onChange={handleChange} />
          Parking Available
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="isWifiAvailable" checked={formData.isWifiAvailable} onChange={handleChange} />
          WiFi Available
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="isPoolAvailable" checked={formData.isPoolAvailable} onChange={handleChange} />
          Pool Available
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="isSpaAvailable" checked={formData.isSpaAvailable} onChange={handleChange} />
          Spa Available
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="isRestaurantAvailable" checked={formData.isRestaurantAvailable} onChange={handleChange} />
          Restaurant Available
        </label>
      </div>
      <div>
        <label>Photos (URLs):</label>
        <input type="text" name="photos" value={formData.photos} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewHotelForm;
