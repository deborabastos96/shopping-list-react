function Loader() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-violet-400/20 backdrop-blur-md">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-violet-200"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-violet-600"></div>
      </div>
    </div>
  );
}

export default Loader;
