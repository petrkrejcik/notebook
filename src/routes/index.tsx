import "./index.css";
import { onMount } from "solid-js";
import type {editor as editorType} from "monaco-editor/esm/vs/editor/editor.api";

export default function Home() {
  let parent: HTMLDivElement;
  let editor: editorType.IStandaloneCodeEditor;

  const setupEditor = (mEditor: typeof editorType) => {
    editor = mEditor.create(parent, {
      minimap: { enabled: false },
      lineNumbers: "off",
      theme: 'vs-dark',
      renderLineHighlight: 'none',
      value: 'console.log("Hello, world!");',
      language: 'javascript',
      padding: { top: 12 },
    });
  };
  
  onMount(async () => {
    const { editor: mEditor, languages } = await import("monaco-editor/esm/vs/editor/editor.api");
    // languages.register({ id: 'markdown' });
    setupEditor(mEditor);
  });

  return (
    <main>
      <div style={{ height: "100%", width: "100%" }} ref={parent}></div>
    </main>
  );
}
