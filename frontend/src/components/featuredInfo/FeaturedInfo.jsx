import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Data Masuk</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2.415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Data Valid</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4.415</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">User Aktif</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">5</span>
        </div>
      </div>
    </div>
  );
}
