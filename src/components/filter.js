const filter = () => {
  return (
    <div className="filter">
      <strong>Filters</strong>
      <h1>CLEAL ALL</h1>
      <input type="range" min={599} max={3999} onChange={() => {}} />
      <label>Product within {}</label>
      <hr />
      <label htmlFor>Category</label>
      <input type="checkbox" value="" checked="" />
      <label htmlFor></label>
      <hr />
      <label htmlFor>Rating</label>
      <input type="radio" checked="" value="" onChange="" />
      <label htmlFor></label>
      <hr />
      <label htmlFor>Sort By</label>
      <input type="radio" checked="" value="" onChange="" />
      <label htmlFor></label>
    </div>
  );
};
export default filter;
