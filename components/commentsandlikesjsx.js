function CommentsLikes() {
  const [comments, setComments] = React.useState(null);
  const [likes, setLikes] = React.useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  React.useEffect(() => {
    const fetchComments = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const blogId = urlParams.get("id");

      try {
        const responsecom = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`
        );
        const responseLike = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
        );
        const datacom = await responsecom.json();
        const datalik = await responseLike.json();
        setComments(datacom.Allsingleblogcomments);
        setLikes(datalik.likes);
        console.log(comments, likes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, []);

  const Likehandles = async (e) => {
    e.preventDefault();
    const like_img = document.getElementById("like-icons");
    if (like_img.getAttribute("src") !== "imagess/icons/liked.png") {
      like_img.setAttribute("src", "imagess/icons/liked.png");

      const objc = { like: true };

      const response = await fetch(
        ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(objc),
        }
      );
    } else {
      like_img.setAttribute("src", "imagess/icons/like-svgrepo-com.svg");

      const likes = await fetch(
        ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
      );
      const likejson = await likes.json();
      commentsArray = commentjdon.Allsingleblogcomments;
      likecount = likejson.likes;

      if (likecount.length > 0) {
        firstlikeID = likecount[0]._id;
      }
      const response = await fetch(
        ` https://mybrand-be-2-jfbq.onrender.com/api/likes/${firstlikeID}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
    }
  };

  return (
    <>
      {comments && likes ? (
        <div className="lekes-comments" style={{ display: "flex" }}>
          <div className="contain">
            <img
              id="like-icons"
              src="imagess/icons/like-svgrepo-com.svg"
              onClick={Likehandles}
            />
            <p id="likes-number">{likes.length}</p>
          </div>
          <div className="contain">
            <img src="imagess/icons/comments-3-svgrepo-com.svg" />
            <p id="comments-number">{comments.length}</p>
          </div>
        </div>
      ) : (
        <div>The is no likes and comments</div>
      )}
    </>
  );
}
ReactDOM.render(
  <CommentsLikes />,
  document.querySelector("#Likes_comments_jsx")
);
