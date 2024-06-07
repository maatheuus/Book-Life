import Icon from "./Icon";

function LoginLayout({ title, children }) {
  return (
    <div className="flex h-screen">
      <div className="hidden rounded-r-2xl rounded-br-2xl lg:flex items-center justify-center flex-1 bg-secondary text-black">
        <div className="max-w-md text-center">
          <Icon />
        </div>
      </div>
      {/* <!-- Right Pane --> */}
      <div className="w-full bg-stone-50 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
