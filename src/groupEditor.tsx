import * as React from "react";
import SyncingEditor from "./syncingEditor";

// {data.match.params.id}

const GroupEditor = (data: any) => {
    const [value, setValue] = React.useState("");
    const [flag, setflag] = React.useState(false);
  return (
    <div>
        { flag ? (<SyncingEditor groupId={value} />) : 
            (<div><button onClick={()=> setflag(true) }>Create New file</button>
            <input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => setflag(true)}>Open</button></div>)
        }
      
    </div>
  );
};

export default GroupEditor;
