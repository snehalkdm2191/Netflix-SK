//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "../../data/fields-edit.json";
import InputField from "./InputField";
import { useItems } from "../../state/ItemsProvider";
import { updateDocument } from "../../scripts/fireStore";

export default function EditForm({ data }) {
  const { dispatchItems } = useItems();
  //Local states
  const [form, setForm] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  console.log(form);

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    const newCourse = { ...form };
    await updateDocument("Items", newCourse.id, newCourse);
    dispatchItems({ type: "UPDATE_ITEM", payload: form });
    alert("Item updated");
    window.location.reload();
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
