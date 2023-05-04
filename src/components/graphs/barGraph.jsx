import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import BarData from "../../data/Wine-Data.json";

const vineData = BarData;

function BarGraph() {
  const [horizontalArr, setHorizontalArr] = useState([]);
  const [verticalArr, setVerticalArr] = useState([]);

  useEffect(() => {
    const dataArray1 = vineData.map((item) => item.Alcohol);
    setHorizontalArr(dataArray1);
  }, []);

  useEffect(() => {
    const dataArray2 = vineData.map((item) => item.Magnesium);
    setVerticalArr(dataArray2);
  }, []);

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
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
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    dataZoom: [
      {
        type: "slider",
        start: 0,
        end: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Bar Graph</h1>
      <ReactEcharts
        option={options}
        style={{ width: "100%", height: "300px" }}
      ></ReactEcharts>
    </div>
  );
}

export default BarGraph;
