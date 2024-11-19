import { useState } from "react";
import useFetch from "../useFetch";
const Hotels = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const {data, loading, error} = useFetch("http://localhost:3000/hotels")
    console.log(data)
    const handleDelete = async (hotelId) => {
        try{
            const response = await fetch(`http://localhost:3000/hotels/${hotelId}`,{
                method: "DELETE"
            });
            if(!response.ok) {
               throw "Failed to delete hotel." 
            }
            const data = await response.json()
            if(data) {
             setSuccessMessage("Hotel deleted successfully")
             window.location.reload()
            }

        }catch(error){
            console.log(error)
        }

    }
    return (
        <div>
            <h1>All Hotels</h1>
            <ul>
                {data?.map(hotel => (
                    <li key={hotel._id}>{hotel.name}{" "}<button onClick={() => handleDelete(hotel._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )

}
export default Hotels;