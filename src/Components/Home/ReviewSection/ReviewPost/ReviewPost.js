import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './ReviewPost.css'


const ReviewPost = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://pacific-basin-32376.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });

        alert('Review posted!');
        reset();
    };


    return (
        <div className="addReview">
            <h3>Review us</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                <input {...register("email",)} required placeholder="Email" />
                <textarea {...register("details",)} placeholder="Enter apartment name and feedback us." required />
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating" required />
                <button class="reviewBtn" type="submit">POST</button>
            </form>
        </div>
    );
};

export default ReviewPost;