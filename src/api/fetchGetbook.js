import axios from "axios";

export const fetchBookList = async (subject) => {
  const res = await axios.get(
    `https://openlibrary.org/subjects/${subject}.json?limit=15`
  );
  return res.data.works;
};

export const searchBookList = async (keyword) => {
  const res = await axios.get(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(
      keyword
    )}&limit=15`
  );
  return res.data.docs;
};
