import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const FeaturedProduct = ({photo, bookName}) => {
    return (

        <div className="border m-3">
            <img
                // src="https://demo.fieldthemes.com/bookshop/demo1/home2/50-large_default/convallis-pharetra.jpg"
                src={photo}
                className="w-full" />
            <div className="flex justify-around items-center text-xs p-7 border-t">
                {/* <p>Convallis Pharetra</p> */}
                <p>{bookName}</p>
                <span>
                    <Rating
                        style={{ maxWidth: 70 }}
                        value={3}
                        readOnly
                    />
                </span>
            </div>
        </div>

    );
};

export default FeaturedProduct;