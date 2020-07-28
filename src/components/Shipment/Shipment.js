import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.scss';
import {useAuth} from '../Login/useAuth'

const Shipment = () => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => console.log(data);
    const auth = useAuth();
  
    return (
      <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
        
        <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Your Name"/>
        {
        errors.name && <span className="error">name is required</span>
        }

        <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Your Email"/>
        {
        errors.email && <span className="error">email is required</span>
        }

        <input name="addressLine1" ref={register({ required: true })} placeholder="Address Line 1"/>
        {
        errors.addressLine1 && <span className="error">addressLine1 is required</span>
        }

        <input name="addressLine2" ref={register} placeholder="Address Line 2"/>
    
        <input name="city" ref={register({ required: true })} placeholder="City"/>
        {
        errors.city && <span className="error">city is required</span>
        }

        <input name="country" ref={register({ required: true })} placeholder="Country"/>
        {
        errors.country && <span className="error">country is required</span>
        }

        <input name="zipcode" ref={register({ required: true })} placeholder="Zip Code"/>
        {
        errors.zipcode && <span className="error">zip code is required</span>
        }
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;