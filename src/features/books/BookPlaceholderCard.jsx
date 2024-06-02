function BookPlaceholder() {
  return (
    <div className="flex">
      <div className="animate-pulse relative max-w-sm min-w-[180px] bg-stone-50/80 rounded-xl px-4 py-3">
        <div className="animate-pulse ml-auto w-3 h-3 bg-gray-primary/50 rounded-full"></div>
        <div className="animate-pulse h-40 w-28 mx-auto rounded-sm overflow-hidden bg-gray-primary/50"></div>
        <div className="animate-pulse flex items-center justify-center mt-2">
          <div className="animate-pulse flex items-center space-x-1 rtl:space-x-reverse">
            <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
            <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
            <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
            <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
          </div>
        </div>
        <div className="animate-pulse w-40 h-2 bg-gray-primary/50 my-2"></div>

        <div className="animate-pulse flex justify-between items-center relative ">
          <div className="animate-pulse w-20 h-2 bg-gray-primary/50"></div>
          <div className="animate-pulse w-3 h-3 bg-gray-primary/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default BookPlaceholder;
