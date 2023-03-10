import blog1 from "../../assets/img/blog/blog-1.jpg";
import blog2 from "../../assets/img/blog/blog-2.jpg";
import blog3 from "../../assets/img/blog/blog-3.jpg";

function LatestNews({ paddingClass = "" }) {
  return (
    <section className={"blog-area " + paddingClass}>
      <div className="container">
        <div className="section-title">
          <h2>Latest News</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog1} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    We have added more items in our inventory
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / 20 October 2022
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog2} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    Christmas Sales Coming!!!
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / 19 November 2022
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog3} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    Visit our Store and Win Prizes!!!
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / 03 December 2022
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
