import Link from "next/link";
import styled from 'styled-components'
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const SearchIconDiv = styled.div`
  > img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  position: relative;
  .search-container {
    position: relative;
    width: auto;
  }
  .search-icon {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    right: 5px;
  }
  .search-root {
    border: 1px solid #bbb;
    border-radius: 4px;
  }
  .search-input {
    padding: 10px 30px 10px 10px;
    width: 150px;
    transition: all 200ms;
    &:focus,
    &:active {
      width: 250px;
    }
  }
  .result-container {
    position: absolute;
    z-index: 100;
    width: 350px;
    margin-left: -25px;
    margin-top: 10px;
    background: #fff;
    border: 1px solid #ccc;
    .category {
      padding: 5px;
      background-color: #e3e3e6;
      color: #535961;
      font-size: 18px;
      font-weight: 700;
    }
    .result-item-container {
      background: #fff;
      .result-item {
        display: flex;
        padding: 15px 10px;
        align-items: center;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
        .title {
          font-size: 13px;
          color: #232529;
          padding-left: 10px;
          font-weight: "ProximaNova Semi Bold";
          letter-spacing: 0;
        }
        .hr {
          margin: 0;
        }
      }
      .page-item {
        font-size: 13px;
        color: #232529;
        text-transform: capitalize;
        cursor: pointer;
        padding: 5px;
        &:hover {
          background: #eee;
        }
      }
    }
  }
`;

function SearchBar({searchList, pages, handleOnChange, setSearchList}) {
  return (
    <SearchIconDiv>
      <div className="search-container">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <InputBase
          onChange={(e) => handleOnChange(e)}
          placeholder="Search…"
          classes={{
            root: "search-root",
            input: "search-input",
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      {searchList && (
        <div className="result-container">
          {pages?.length > 0 && <div className="category">
            <p style={{ marginBottom: 5 }}>Page Found</p>
            <div />
            <div className="result-item-container">
              {pages?.map(
                (item) =>
                  item && (
                    <Link href={item?.link}>
                      <p
                        onClick={() => setSearchList(null)}
                        className="page-item"
                      >
                        {item?.category} | {item?.text}
                      </p>
                    </Link>
                  )
              )}
            </div>
          </div>}
          <div className="category">
            <p>Product Matches</p>
            <div />
          </div>
          <div className="result-item-container">
            {searchList
              ?.map((item) => (
                <a
                  href={`https://shopnewage.com${item.url.substring(
                    0,
                    item.url.indexOf("?")
                  )}`}
                  target="_blank"
                >
                  <div
                    className="result-item"
                    onClick={() => setSearchList(null)}
                  >
                    <img src={item.image} width="60px" />
                    <div>
                      <p className="title">{item.title}</p>
                    </div>
                  </div>
                  <hr style={{ margin: 0, borderColor: "#eee" }} />
                </a>
              ))}
          </div>
        </div>
      )}
    </SearchIconDiv>
  )
}

export default SearchBar
