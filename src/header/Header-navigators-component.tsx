export default function HeaderNavigators(props:any) {

  return (
    <div
      className={props.activePage == props.content ? "active" : ""}
      onClick={() => {
        props.setActoinActivePage(props.content);
      }}
    >
      {props.content}
    </div>
  );
}
