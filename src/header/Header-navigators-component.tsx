export default function HeaderNavigators(props:any) {

  return (
    <div
      className={props.activePage == props.number ? "active" : ""}
      onClick={() => {
        props.setActoinActivePage(props.number);     
      }}
    >
      {props.number}
    </div>
  );
}
