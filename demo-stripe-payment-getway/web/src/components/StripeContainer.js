import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51J9rCZSDsVQw7gi0O4GWmbQFnw9rSWX0AUdfIDe2zLXxJO0XkREUyd6sHhnXX4FA5SqegT1zugFJfemS01PeBkLG00iv8anELS"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}