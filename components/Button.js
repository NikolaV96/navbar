
export default function Button( props ) {
  return (
    <div className={props.openModal ? "rounded-lg p-3 flex flex-row items-center space-x-5 hover:bg-blue-500/10 cursor-pointer" : "hidden"}>
      <div>
        {props.icon}
      </div>
      <p>{props.title}</p>
    </div>
  );
}
