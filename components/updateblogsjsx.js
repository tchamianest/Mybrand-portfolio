function BlogHomepage() {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mybrand-be-2-jfbq.onrender.com/api/blogs"
        );
        const data = await response.json();
        console.log(data.Blogs);
        display(data.Blogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const display = (blogs) => {
    const blogStoreOne =
      document.getElementsByClassName("blogs-with-button")[0];
    Array.from(blogs).forEach(async (el) => {
      const title = el.title;
      const small_description = el.small_description;
      const image_sr = el.image_src;
      const blogId = el._id;

      const updatedCommentsResponse = await fetch(
        `https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/comments`
      );
      const updatedCommentsJson = await updatedCommentsResponse.json();
      const commentsArray = updatedCommentsJson.Allsingleblogcomments.length;

      const updatedLikesResponse = await fetch(
        `https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}/likes`
      );
      const updatedLikesJson = await updatedLikesResponse.json();
      const like_counter = updatedLikesJson.likes.length;
      document.querySelector(".button-left-home").style.display = "block";
      document.querySelector(".button-right-home").style.display = "block";
      document.querySelector(".loader-button").style.display = "none";

      const onetemplate = (
        <a href={`blogs.html?id=${blogId}`} className="link-blog">
          <div className="blog-review">
            <img src={image_sr} />
            <div className="like-blog">
              <p>•{like_counter} Like</p>
              <p>•{commentsArray} com</p>
            </div>
            <p className="blog-title">{title}</p>
            <p className="blog-description">{small_description}</p>
          </div>
        </a>
      );
      const container = document.createElement("div");
      ReactDOM.render(onetemplate, container);
      blogStoreOne.appendChild(container.firstChild);
    });
  };

  const handleLinkClick = (event) => {
    const clickedLink = event.target.closest(".link-blog");

    if (clickedLink) {
      event.preventDefault();
      const blogId = clickedLink.getAttribute("href").split("=")[1];
      window.location.href = `blogs.html?id=${blogId}`;
    }
  };
  // scrollll
  const scrollRight = () => {
    const container = document.querySelector(".blogs-with-button");
    if (container) {
      container.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const container = document.querySelector(".blogs-with-button");
    if (container) {
      container.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="scroller-section">
      <div className="button-left-home" onClick={scrollLeft}>
        &#8592;
      </div>
      <div className="blogs-with-button" onClick={handleLinkClick}>
        <div className="loader-button"></div>
      </div>

      <div className="button-right-home" onClick={scrollRight}>
        &#8594;
      </div>
    </div>
  );
}

ReactDOM.render(<BlogHomepage />, document.getElementById("root-react"));
