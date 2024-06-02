import { lazy, Suspense } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import ButtonIcon from "../components/ButtonIcon";
// import { HiArrowSmLeft } from "react-icons/hi";
// import Modal from "../components/Modal";
// import BookPlaceholder from "../features/books/BookPlaceholder";
// import Heading from "../components/Heading";

// const Spinner = lazy(() => import("../components/Spinner"));
// const BookDetail = lazy(() => import("../features/books/BookDetail"));
const Main = lazy(() => import("../components/Main"));
// import Main from "../components/Main";

function HomePage() {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-x-6 h-screen bg-gray-200/75 p-6 md:grid-cols-6">
      <Sidebar />

      <main className="col-span-6 row-span-full overflow-y-scroll">
        <div className="h-full">
          <Header />
          {/* <div className="bg-primary rounded-full left-0 top-2 w-5 h-5 my-2">
            <ButtonIcon to="/" replace variation="primary">
              <HiArrowSmLeft className="w-5 h-5 text-white" />
            </ButtonIcon>
          </div> */}
          {/* <Heading /> */}
          {/* <Suspense fallback={<Spinner />}> */}
          {/* <BookDetail /> */}
          {/* </Suspense> */}
          {/* <Modal /> */}

          {/* <BookPlaceholder /> */}

          <Suspense fallback={<p>Loading...</p>}>
            <Main />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
