//@ts-nocheck
import { useRef } from "react";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type, mode, required } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <>
      {key !== "Type" && key !== "Season" && key !== "Episod" ? (
        <div>
        <label className={key}>
          {label} {required && "  *"}</label>
          <input
            ref={inputReference}
            value={state}
            className="form-control"
            type={type}
            placeholder={mode === "edit" ? state : placeholder}
            required={required}
            onChange={() => onChange(key, inputReference.current.value)}
          ></input>
        </div>
      ):null}
      {key === "Type" && (
        <label className="files">
          Type
          <select
            name="type"
            className="form-control"
            id="type"
            ref={inputReference}
            required={required}
            onChange={() => onChange(key, inputReference.current.value)}
          >
            <option value="">Select Type</option>
            <option value="Film">Flim</option>
            <option value="Series">Series</option>
          </select>
        </label>
      )}
      {key === "Season" || key === "Episod" ? (
        <label className={key}>
          {key}
          <select
            name={key}
            className="form-control"
            id={key}
            ref={inputReference}
            onChange={() => onChange(key, inputReference.current.value)}
          >
            <option value="">Select {key}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      ):null}
    </>
  );
}
