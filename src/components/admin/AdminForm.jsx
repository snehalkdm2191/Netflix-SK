import CreateForm from "./CreateForm";
import EditForm from "./EditForm";

export default function AdminForm({ data, type }) {
  return (
    <div className="admin-form">
      {type === "create" && <CreateForm />}
    </div>
  );
}
