import * as React from "react";
import SyncingEditor from "./syncingEditor";

const GroupEditor = (data: any) => {
  const [value, setValue] = React.useState("");
  const [flag, setflag] = React.useState(false);
  return (
    <div>
      {flag ? (
        <SyncingEditor groupId={value} />
      ) : (
        <div
          style={{
            display: "grid",
            height: "500px",
            marginTop: "100px",
            paddingLeft: "40%",
            gridTemplateColumns: "300px",
            gridTemplateRows: "100px 50px 50px",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <button onClick={() => setflag(true)}>Create New file</button>
          <input type="text" onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => setflag(true)}>Open</button>
        </div>
      )}
    </div>
  );
};

export default GroupEditor;
