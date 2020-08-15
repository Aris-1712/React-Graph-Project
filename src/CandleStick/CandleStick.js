import dayjs from "dayjs";
import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./CandleStick.css";
const CandleStick = (props) => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    setSeries(props.data);
  }, [props.data]);
  const options = {
    chart: {
      height: 350,
      type: "candlestick",
    },
    title: {
      text: "CandleStick Chart (Dummy Data)",
      align: "left",
    },

    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: (val) => {
          return dayjs(val).format("MMM DD HH:mm");
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="chartContainer">
      <h1>React JS-Graph Example (Candlestick Graph)</h1>
      <div className="chart">
        <Chart
          series={series}
          options={options}
          type="candlestick"
          height={350}
        ></Chart>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.series,
  };
};
export default connect(mapStateToProps)(CandleStick);
