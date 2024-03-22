import "animate.css";

export const Card = (product: Product) => {
    return (
        <>
            <div className="bg-slate-500 text-white p-5 rounded animate__animated animate__bounceIn">
                <div className="flex justify-center mb-3">
                    <h3 className="font-bold text-2xl uppercase">
                        {product.title}
                    </h3>
                </div>
                <div className="flex justify-center">
                    <img
                        src={product.images[0]}
                        alt=""
                        className="rounded max-h-48"
                    />
                </div>
                <div>{product.brand}</div>
                <div>
                    <span>{product?.discountPercentage}%</span>
                    <span>{product.price}€</span>
                </div>
                <div>{product.description}</div>
            </div>
        </>
    );
};
