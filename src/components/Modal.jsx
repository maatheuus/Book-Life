import { createPortal } from "react-dom";
import SearchForm from "./SearchForm";
import Button from "./Button";
import { useClickOutside } from "../hooks/useClickOutside";

export default function Modal({ closeModal }) {
  const ref = useClickOutside(closeModal);

  return createPortal(
    <>
      <div className="fixed inset-0 z-[500] backdrop-blur-sm">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96"
          ref={ref}
        >
          <div className="rounded-lg shadow-lg relative flex items-center flex-col w-full bg-stone-50 outline-none focus:outline-none z-[50]">
            <div className="p-6 w-full flex flex-col ">
              <SearchForm>
                <div className="flex justify-between pt-5">
                  <Button
                    type="button"
                    className="text-stone-500 border-none hover:text-primary"
                    variation="primary"
                    onClick={() => closeModal()}
                  >
                    Close
                  </Button>
                  <Button
                    onClick={(e) => setTimeout(closeModal)}
                    type="submit"
                    variation="primary"
                    className="bg-primary text-white border-none font-bold px-6 py-2 text-md focus:outline-none"
                  >
                    Search
                  </Button>
                </div>
              </SearchForm>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
