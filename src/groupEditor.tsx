import * as React from "react";
import SyncingEditor from "./syncingEditor";

const GroupEditor = (data: any) => {
    
    return (<div> <SyncingEditor groupId = {data.match.params.id} /></div>);
}

export default GroupEditor;