export default function Loader() {
  const circleCommonClasses = "h-4 w-4 bg-cyan-500 rounded-full ";

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="m-auto w-full h-full flex justify-center items-center">
        <div className={`${circleCommonClasses} mr-2 animate-bounce`}></div>
        <div className={`${circleCommonClasses} animate-bounce200 mr-2`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
}
