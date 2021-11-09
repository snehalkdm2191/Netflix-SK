//@ts-nocheck
//NPM Packages
import { FC, useState } from "react";
import { Link } from "react-router-dom";
//Local imports
import Modal from "./Modal";
import { useUsers } from "../../state/UsersProvider";
import { deleteDocument } from "../../scripts/fireStore";
import blankImg from "../../assets/img/image-placeholder.png";

interface MyProps {
  data: object;
}
const Card: FC<MyProps> = ({ data }) => {
  const { user }: any = useUsers();
  //Local state
  const [isOpen, setIsOpen] = useState(false);

  //Methods
  async function handleDelete(event, path, id) {
    event.preventDefault();
    if (window.confirm("Are you sure ?")) {
      await deleteDocument(path, id);
      alert("Item deleted");
    }
  }

  return (
    <div className="parcel-item-div">
      <span className="pl-item">
        <div className="pl-head">Type:</div>
        <div>{data.Type}</div>
      </span>
      <span className="pl-item">
        <div className="pl-head">Title:</div>
        <div>{data.Title}</div>
      </span>
      <span className="pl-item">
        <div className="pl-head">Year:</div>
        <div>{data.Year}</div>
      </span>
      <span className="pl-item">
        <div className="pl-head">trailer:</div>
        <div>
          <a href={data.Trailer} target="_blank" ClassName="active-link">
            View Trailer
          </a>
        </div>
      </span>
      {user.role === "admin" && (
        <span className="pl-item">
          <Link className="btn btn-course-view" to={"/item/" + data.id}>
            <h6>
              <i class="fas fa-binoculars"></i>
            </h6>
          </Link>
          <button
            className="btn btn-course-edit"
            onClick={() => setIsOpen(true)}
          >
            <h6>
              <i class="fas fa-edit"></i>
            </h6>
          </button>
          <button
            className="btn btn-course-delete"
            onClick={(event) => handleDelete(event, "Items", data.id)}
          >
            <h6>
              <i class="fas fa-trash-alt"></i>
            </h6>
          </button>
        </span>
      )}

      {user.role === "admin" && (
        <Modal
          type="edit"
          data={data}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          Edit course
        </Modal>
      )}
    </div>
  );
};

export default Card;
