// Server Component

import AddToCartButton from "./AddToCartButton";

export default function GoodProductPage(){
    return (
        <div>
            {/* description is now rendered on the server */}

            <p className="mt-2 text-gray-700">
                Experience premium sound quality with these wireless headphones. 
                Featuring active noise cancellation, 30-hour battery life, and 
                a comfortable over-ear design. Perfect for travel and work.
            </p>

            <AddToCartButton />
        </div>
    )
}