function CommentsAdd() {
  const [comments, setComments] = React.useState(null);
  const [likes, setLikes] = React.useState(null);

  React.useEffect(() => {
    const FetchComments = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const blogId = urlParams.get("id");

      try {
        const responsecom = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`
        );

        const datacom = await responsecom.json();
        const datas = await datacom.Allsingleblogcomments;
        setComments(datas);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    FetchComments();
  }, []);
  const initialState = {
    Comments: "",
  };
  const [form, setFOrm] = React.useState(initialState);
  const handleChange = async (e) => {
    setFOrm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const tokenstore = localStorage.getItem("authToken");
      const userType = localStorage.getItem("userType");
      if (!tokenstore) {
        window.location.href = "login.html"; // Replace "/home" with the appropriate home page URL
      } else {
        const usename = localStorage.getItem("userEmail");
        let user_name;
        if (usename) {
          const final = usename.split("@")[0];
          user_name = final;
        } else {
          user_name = "unkown";
        }
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get("id");

        const objc = { name: `${user_name}`, comment: form.Comments };

        console.log(objc);
        console.log(blogId);
        const response = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(objc),
          }
        ).then((res) => {
          console.log(res.status);
          if (res.status === 201) {
            setFOrm(initialState);
            window.location.reload();
          } else {
            console.log(res);
          }
        });
      }
    } catch (err) {
      console.log("there is some error in posting");
    }
  };
  return (
    <>
      <div className="comments-container" style={{ display: "flex" }}>
        <div id="comments-adder" className="comments">
          {comments &&
            comments.map((comment, index) => (
              <div key={index} className="one-comments">
                <div className="photo">
                  <img src="imagess/uknown user.png" alt="User" />
                </div>
                <div className="text-comm">
                  <p className="name">{comment.names}</p>
                  <p className="comments-descr">{comment.comment}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="add-comments">
          <p className="add-title-com">Add New Comments</p>
          <div class="add-com">
            <textarea
              id="comments--inputs"
              className="longText"
              name="Comments"
              placeholder="Enter the comments on Blog ..."
              rows="10"
              cols="49"
              value={form.Comments}
              onChange={handleChange}
            ></textarea>
            <button id="comments-button" onClick={handlePost}>
              Comments
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
ReactDOM.render(<CommentsAdd />, document.querySelector("#comments_Add_jsx"));
