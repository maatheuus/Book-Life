function BookPlaceholder() {
  return (
    <section className="animate-pulse bg-stone-50/80  rounded-xl px-4 py-3 relative overflow-hidden w-[80%]">
      <div className="flex">
        <div className="animate-pulse w-3/5 min-w-64 max-w-36 rounded-sm overflow-x-hidden bg-gray-primary/50"></div>
        <div className="animate-pulse mt-6 ml-6">
          <div className="animate-pulse  w-40 h-2 bg-gray-primary/50 rounded-sm"></div>
          <div className="animate-pulse mt-2 flex items-center gap-2">
            <div className="animate-pulse flex items-center space-x-1 rtl:space-x-reverse">
              <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
              <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
              <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
              <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
            </div>
            <div className="animate-pulse w-6 h-3 bg-gray-primary/50 rounded-sm"></div>
          </div>
          <div className="animate-pulse mt-3 mb-2 flex items-center gap-4">
            <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
            <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
          </div>

          <div className="animate-pulse w-screen flex flex-col gap-y-2 last:mb-6">
            <div className="animate-pulse  w-[40%] h-2 bg-gray-primary/50 rounded-sm"></div>
            <div className="animate-pulse  w-[40%] h-2 bg-gray-primary/50 rounded-sm"></div>
            <div className="animate-pulse  w-[40%] h-2 bg-gray-primary/50 rounded-sm"></div>
            <div className="animate-pulse  w-60 h-2 bg-gray-primary/50 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookPlaceholder;
