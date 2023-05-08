const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">No ratings yet!</h3>;

  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} width="50%" />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        <div className="row">
              {comments}
            </div>
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
       
              <div className="form-group col-md-4">
                <label htmlFor="validationDefault01" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  value=""
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationDefault03" className="form-label">
                  Comment
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  value=""
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Rant
                </label>
              </div>
              <label htmlFor="customRange3" className="form-label">
                Rating
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              />

              <div className=" form-group col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            
          
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
