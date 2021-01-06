import React, { useMemo, useState, useRef, useEffect, ReactComponentElement } from "react";

import { createEditor, Operation } from "slate";

import { Slate, Editable, withReact } from "slate-react";

import initialValue from "./slateIntitialValue";

import io from "socket.io-client";

const socket = io("http://localhost:4000");

interface Props {
  groudId: string
}

const SyncingEditor = ({groudId}) => {
  const Editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([initialValue]) as any;

  const id = useRef(`${Date.now()}`);
  const remote = useRef(false);

  useEffect(() => {
    socket.on("new-remote-operations", ({editorId, ops}: {editorId: string, ops: string}) => {
      if (id.current !== editorId) {
        remote.current = true;
        JSON.parse(ops).forEach((op: any) => {
      
          Editor.apply(op);
        });
        remote.current = false;
      }
    })

    return () => {
      socket.off("new-remote-operations");
    }
  }, []);

  return (
    <Slate
      editor={Editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);

        const ops = Editor.operations
          .filter((o: any) => {
            if (o) {
              return (
                o.type !== "set_selection" &&
                o.type !== "set_value" &&
                (!o.data || Object.values(o.data).includes("source"))
              );
            }
            return false;
          })
          .map((o: any) => ({ ...o, data: { source: "one" } }));
        if (ops.length && !remote.current) socket.emit("new-operations", {editorId: id.current, ops: JSON.stringify(ops)});
      }}
    >
      <Editable />
    </Slate>
  );
};

export default SyncingEditor;
