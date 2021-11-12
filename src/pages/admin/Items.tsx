//@ts-nocheck
//NPM Packages
import { useParams } from "react-router-dom";

//Local imports
import { useItems } from "../../state/ItemsProvider";
import useFetch from "../../scripts/useFetch";
import blankImg from "../../assets/img/image-placeholder.png"

export default function Items() {
  //Local state
  const { id } = useParams();
  const { dispatchItems } = useItems();
  const Items = useFetch("Items", dispatchItems);
  const data = Items.data.find((item) => item.id === id);
  console.log("Items", data);

  console.log("id", id);

  return (
    <div className="container view-course-container">
      {(!Items.loading && Items.error) === null && (
        <div class="card view-course-card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    {data.File === "" ? (
                      <img src={blankImg} alt="img" />
                    ) : (
                      <img src={data.File} alt="img" />
                    )}
                  </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h3 class="course-title">{data.Title}</h3>
                <h3 class="course-title">{data.Season}</h3>
                <h3 class="course-title">{data.Year}</h3>
                <p class="course-description">{data.Description}</p>

                <a href={data.Trailer} target="_blank" ClassName="active-link">
                  <h5 class="course-title">View Trailer</h5>
                </a>
                <a href={data.Link} target="_blank" ClassName="active-link">
                  <h5 class="course-title">View {data.Type}</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
