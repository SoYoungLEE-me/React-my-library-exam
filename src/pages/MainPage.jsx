import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBookList, searchBookList } from "../api/fetchGetbook";
import BookCard from "../components/BookCard";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col } from "react-bootstrap";

const MainPage = () => {
  const [keyword, setKeyword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookList", searchTerm],
    queryFn: () =>
      searchTerm ? searchBookList(searchTerm) : fetchBookList("fantasy"),
    enabled: true,
  });

  const handleSearch = () => {
    const trimmed = keyword.trim();
    if (!trimmed) {
      alert("검색어를 입력해주세요.");
      return;
    }
    setSearchTerm(trimmed);
    setKeyword("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="hero-section">
        <h1 className="title">코딩 알려주는 누나 도서관</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="책 제목이나 작가를 검색하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>

      <main className="book-list">
        <Container>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <ClipLoader color="#36d7b7" size={60} />
            </div>
          ) : isError ? (
            <div className="text-center mt-5 text-danger">{error.message}</div>
          ) : data.length > 0 ? (
            <Row xs={2} md={3} lg={4} xxl={5} className="g-4">
              {data?.map((item) => (
                <Col key={item.key}>
                  <BookCard book={item} />
                </Col>
              ))}
            </Row>
          ) : (
            <div
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontSize: "18px",
                color: "#555",
              }}
            >
              검색 결과가 없습니다.
            </div>
          )}
        </Container>
      </main>
    </div>
  );
};

export default MainPage;
