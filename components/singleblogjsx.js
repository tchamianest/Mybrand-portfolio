function SingleBlogJsx() {
  const [selectedBlog, setSelectedBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const blogId = urlParams.get("id");

      try {
        const response = await fetch(
          ` https://mybrand-be-2-jfbq.onrender.com/api/blog/${blogId}`
        );

        const data = await response.json();
        setSelectedBlog(data.blogs);
        console.log(selectedBlog);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      {loading ? (
        <div className="load-container">
          <div className="loader-button-button"></div>
        </div>
      ) : selectedBlog ? (
        <>
          <div className="blog-full-text">
            <img id="image-blog" src={selectedBlog.image_src} />
            <div className="text-description-blog">
              <span className="blog-title">{selectedBlog.title}</span>
              <br />

              <p id="small-desc" className="text-description-blog">
                {selectedBlog.small_description}
              </p>
            </div>
          </div>
          <div
            id="text-desc"
            className="text-description-blog p-full"
            dangerouslySetInnerHTML={{ __html: selectedBlog.template }}
          ></div>
        </>
      ) : (
        <div>Blog not existe</div>
      )}
    </>
  );
}
ReactDOM.render(<SingleBlogJsx />, document.querySelector("#root-single-blog"));
