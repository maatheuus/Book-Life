import { createPortal } from "react-dom";
import SearchForm from "./SearchForm";
import Button from "./Button";

export default function Modal({ showModal = false, setShowModal }) {
  return createPortal(
    showModal ? (
      <>
        <div className="flex justify-center items-center fixed inset-0 z-50 ">
          <div className=" my-6">
            <div className="rounded-lg shadow-2xl relative flex flex-col w-full bg-stone-50 outline-none focus:outline-none">
              <div className="p-6 flex">
                <SearchForm>
                  <div className="flex justify-between pt-5">
                    <Button
                      className="text-primary hover:shadow-lg border-none hover:transition-all hover:duration-200"
                      variation="primary"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variation="primary"
                      className="bg-primary/75 hover:bg-primary text-white border-none font-bold px-6 py-2 text-md focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={() => setShowModal(false)}
                    >
                      Search
                    </Button>
                  </div>
                </SearchForm>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-30 fixed inset-0 z-40 bg-stone-100"></div>
      </>
    ) : null,
    document.body
  );
}
