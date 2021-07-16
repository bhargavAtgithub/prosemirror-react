import React, { useRef, useEffect } from "react";

import "./prosemirror.styles.css";

// Basic Schema
// import { schema } from "prosemirror-schema-basic";
import { schema } from "./Prosemirror/schema";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import { EditorContainer } from "./components/containers/editorContainer.component";

export const Editor = () => {
  const documentRef = useRef(null);

  const state = EditorState.create({ schema });
  const view = new EditorView(null, {
    state,
    dispatchTransaction(transaction) {
      console.log(
        "Document size went from ",
        transaction.before.content.size,
        "to ",
        transaction.doc.content.size
      );
      let newState = view.state.apply(transaction);
      view.updateState(newState);
    },
  });

  useEffect(() => {
    if (!documentRef.current.childElementCount) {
      documentRef.current.appendChild(view.dom);
      view.focus();
    }
  }, [documentRef.current]);

  const editor = (
    <div style={{ height: "100%", width: "100%" }} ref={documentRef}></div>
  );

  return <EditorContainer>{editor}</EditorContainer>;
};
