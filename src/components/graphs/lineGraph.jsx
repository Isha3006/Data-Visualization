import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import LineData from "../../data/Wine-Data.json";

const vineData = LineData;

function LineGraph() {
  const [horizontalArr, setHorizontalArr] = useState([]);
  const [verticalArr, setVerticalArr] = useState([]);

  useEffect(() => {
    const dataArray = vineData.map((item) => item.Flavanoids);
    setHorizontalArr(dataArray);
  }, []);

  useEffect(() => {
    const dataArray = vineData.map((item) => item.Ash);
    setVerticalArr(dataArray);
  }, []);

  const option = {
    xAxis: {
      type: "category",
      data: horizontalArr,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: verticalArr,
        type: "line",
      },
    ],
  };

  return (
    <div>
      <h1>LineGraph</h1>
      <ReactEcharts
        option={option}
        style={{ width: "100%", height: "300px" }}
      ></ReactEcharts>
    </div>
  );
}

export default LineGraph;
