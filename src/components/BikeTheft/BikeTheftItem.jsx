import "@/styles/test.css";
const BikeTheftItem = ({ theft }) => {
  console.log(theft);
  return (
    <div role="listitem" className="w-dyn-item ">
      <div
        data-w-id="89847bfb-28f6-b65c-032d-7301f4b503a0"
        href="/blog/quibusdam-non-et-aut"
        className="blog-link w-inline-block "
      >
        <div className="blog-image">
          {theft.large_img && (
            <img src={theft.large_img} alt="Bike" className="w-full mt-2" />
          )}

          <div className="image-cover"></div>
        </div>
        <div className="blog-content-01">
          <div className="blog-content-description">
            <div className="product-content">
              <div className="caption-02 capital">{theft.title}</div>
            </div>
            <div className="blog-content-heading">
              <div className="sub-heading-01">{theft.description}</div>
            </div>
            <div className="blog-content-text">
              <div className="body-02 color-gray">
                {new Date(theft.description * 1000).toLocaleDateString()}
              </div>{" "}
            </div>
            <div className="blog-content-button">
              <div className="blog-content-btn-01">
                <div className="cta-text">{theft.location_description}</div>
              </div>
              <div className="blog-content-btn-02">
                <img
                  src="https://assets-global.website-files.com/64f613e3ab1c6a53780b6de6/64f732bc16d3b0eb3845e67d_2.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeTheftItem;
