//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "../../data/fields-create.json";
import InputField from "./InputField";
import { useItems } from "../../state/ItemsProvider";
import { createDoc } from "../../scripts/fireStore";

export default function CreateForm() {
  const { dispatchItems } = useItems();

  //Local states
  const [form, setForm] = useState({
    Type: "",
    Title: "",
    Season: "",
    Episod: "",
    Year: "",
    Ratings:"",
    Trailer:"",
    Link:"",
    File:""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  console.log(form);

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    await createDoc("Items", form);
    dispatchItems({ type: "CREATE_ITEM", payload: form });
    alert("Item created");
    history.push("/main");
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <form className="container form-container" onSubmit={onSubmit}>
      {Fields}
      <p>{errorMessage}</p>
      <button className="btn-admin-form">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
