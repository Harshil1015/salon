import { Link } from "react-router-dom";

export default function Pagedetails(props) {
  return (
    <>
      <div class="breadcrumb-agile">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {props.linked}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
