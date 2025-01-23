import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";




const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please to eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}></Elements>
            </div>
        </div>
    );
};

export default Payment;