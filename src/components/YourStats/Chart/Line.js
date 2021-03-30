import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import styled from 'styled-components';

const Container = styled.div`
  height: 220px;
  width: 80%;
  padding: 0 1.5rem;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  & > button {
    width: 100px;
    height: 20px;
  }
  @media (max-width: 768px) {
    margin:2rem 0;
  }
`;
const Container1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  margin: 1rem;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  & > h3 {
    font-weight: 800;
  }
  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;
const Option = styled.div`
  width: 20%;
  height: 30%;
  & > h1 {
    color: #000000;
    font-size: 12px;
    opacity: 0.3;
  }
  &:nth-child(2) > h1 {
    opacity: 1;
    color: #0c0b0b;
  }
   &:hover{
            cursor:pointer;
        }
`;

const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfig = {
  type: "line",
  data: {
    labels: ["mon","tue","wed","thu","fri","sat"],
    datasets: [
      {
        label: "none",
        data: [0,1.5,2.5,1,4,3,2],
        backgroundColor: [
          '#fff',
        ],
        borderColor: [
          "#000000"
        ],
        borderWidth: 2,
        pointBackgroundColor:"#000000"
      }
    ]
  },
  options: {
   legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#0b0b0c",
                        fontSize: 10,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "#0b0b0c",
                        fontSize: 10,
                        fontFamily: `"Roboto", sans-serif`,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }]
            }
  }
};

const Line = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  const onButtonClick = () => {
    const data = [
      randomInt(),
      randomInt(),
      randomInt(),
      randomInt(),
      randomInt(),
      randomInt()
    ];
    updateDataset(0, data);
  };

  return (
    <Container>
     <Container1>
          <h1>Your Statistics</h1>
            <Option onClick={onButtonClick}>
              <h1>Learning Hourse</h1>
            </Option>
            <Option onClick={onButtonClick}>
              <h1>My Courses</h1>
            </Option>
        </Container1>
      <canvas ref={chartContainer} />
    </Container>
  );
};

export default Line;
