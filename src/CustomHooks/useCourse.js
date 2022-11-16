import { useEffect, useState } from "react";
const getLessons = () => {
    return fetch(
      "https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json"
    ).then((x) => x.json());
  };
  
  const getArray = (arr) => {
    let resultArray = [];
    for (let i = 0; i < 17; i++) {
      resultArray.push({
        title: arr[i].title,
        keyPoints: arr[i].keyPoints,
        type: arr[i].type,
        youtube: arr[i].youtube,
        links: arr[i].links,
      });
    }
    return resultArray;
  };
  
  export const useCourse = () => {
    const [lessons, setLessons] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(() => {
      getLessons().then((r) => {
        setLessons(getArray(r.lessons));
        setTitle(r.title);
      });
    }, []);
    return [lessons, title];
  };