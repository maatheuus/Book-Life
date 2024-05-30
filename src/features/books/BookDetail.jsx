import { HiStar, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import image from "../../assets/images/img-test.jpeg";
import ButtonIcon from "../../components/ButtonIcon";
import { HiArrowSmLeft } from "react-icons/hi";

function BookDetail() {
  return (
    <section className="bg-stone-50 rounded-lg relative overflow-hidden">
      {/* <div className="bg-primary rounded-full text-white left-0 top-2 w-6 h-6">
        <ButtonIcon variation="primary">
          <HiArrowSmLeft className="w-6 h-6" />
        </ButtonIcon>
      </div> */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <img
            className="shadow-sm w-3/5 min-w-64 max-w-36 rounded-sm overflow-x-hidden object-cover"
            src={image}
            alt="image of the book selected"
          />

          <div className="mt-6 ml-6">
            <h1 className="text-xl font-extrabold text-stone-950">Malcolm X</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <HiStar className="fill-primary" />
                <HiStar className="fill-primary" />
                <HiStar className="fill-primary" />
                <HiStar className="fill-primary" />
              </div>
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                (5.0)
              </p>
            </div>
            <div className="mt-3 mb-2 flex items-center gap-4">
              <ButtonIcon variation="primary">
                <HiOutlineHeart className="w-4 h-4" />
                Add to favorites
              </ButtonIcon>

              <ButtonIcon variation="primary">
                <HiOutlineShoppingCart className="w-4 h-4" />
                Add to cart
              </ButtonIcon>
            </div>

            <p className="mb-6 text-gray-primary hyphens-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis debitis quaerat molestiae vel illo totam magnam, ipsum
              corrupti mollitia! Ab, iusto. Ullam voluptatibus incidunt culpa
              placeat molestiae magni eum minus. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Placeat omnis sit iusto, iure
              deleniti, reprehenderit nemo temporibus sapiente aliquid expedita,
              minima ipsa soluta minus! Voluptates soluta ipsa temporibus
              praesentium eum?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi expedita illum odit iure, soluta non similique
              voluptatem saepe. Alias dolores maiores magnam aut dolorem
              adipisci sequi deserunt ipsa eius soluta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;
