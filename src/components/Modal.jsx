import { createPortal } from "react-dom";
import SearchForm from "./SearchForm";
import Button from "./Button";

export default function Modal({ showModal, onClick }) {
  return createPortal(
    showModal && (
      <>
        <div className="flex justify-center items-center fixed inset-0 z-[500] bg-stone-50/35">
          <div className="w-96">
            <div className="rounded-lg shadow-lg relative flex items-center flex-col w-full bg-stone-50 outline-none focus:outline-none z-[501]">
              <div className="p-6 w-full flex flex-col ">
                <SearchForm>
                  <div className="flex justify-between pt-5">
                    <Button
                      type="button"
                      className="text-stone-500 border-none hover:text-primary"
                      variation="primary"
                      onClick={onClick}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={() => setTimeout(onClick)}
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
        <div className="opacity-30 fixed inset-0 z-40 bg-stone-100"></div>
      </>
    ),
    document.body
  );
}
