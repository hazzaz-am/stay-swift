const Search = ({fromList}: {fromList: boolean}) => {
  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div id="searchParams" className={fromList ? "!shadow-none" : ""}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select name="destination" id="destination">
                <option value="Bali">Bali</option>
                <option value="Cox's Bazar">Cox&apos;s Bazar</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saint Martin">Saint Martin</option>
                <option value="Bali">Bali</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" name="checkin" id="checkin" />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" name="checkout" id="checkout" />
            </h4>
          </div>
        </div>
      </div>

      <button className="search-btn">🔍️ {fromList ? "Modify Search": "Search"}</button>
    </>
  );
};

export default Search;
