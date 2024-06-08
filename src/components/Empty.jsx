function Empty({ icon, title }) {
  return (
    <div className="bg-stone-50 rounded-xl w-full flex items-center justify-center gap-x-2 text-xl text-secondary py-10">
      {icon} <span>{title}</span>
    </div>
  );
}

export default Empty;
