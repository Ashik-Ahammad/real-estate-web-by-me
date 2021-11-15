import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddApartment = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://pacific-basin-32376.herokuapp.com/allProducts', data)
            .then(res => {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });

        alert('Apartment added!');
        reset();
    };

    return (
        <div className="addReview">
            <h3>Add an Apartment</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="IMG URL" required />
                <input {...register("name")} placeholder="Apartment Name" required />
                <input {...register("address")} required placeholder="Address" />
                <input {...register("details")} placeholder="Details" required />
                <input {...register("price")} placeholder="Price" required />

                <button class="reviewBtn" type="submit">ADD</button>
            </form>
        </div>
    );
};

export default AddApartment;