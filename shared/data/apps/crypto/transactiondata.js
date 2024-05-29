import dynamic from 'next/dynamic';
import { Component } from 'react';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr : false});

export class TransactionsStatistics extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: this.createSeriesData(props),
        options: this.createOptions(),
      };
    }

    componentDidMount() {
      this.setState({
        series: this.createSeriesData(this.props),
      });
    }

    componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.setState({
          series: this.createSeriesData(this.props),
        });
      }
    }

    createSeriesData(props) {
      return [
        {
          name: "New",
          data: [props.newBids || 0],
        },
        {
          name: "Pending",
          data: [props.pendingBids || 0],
        },
        {
          name: "Completed",
          data: [props.completedBids || 0],
        },
        {
          name: "Inprogress",
          data: [props.inProgressBids || 0],
        },
      ];
    }

    createOptions() {
      return {
        chart: {
          type: "bar",
          height: 210,
          stacked: true,
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%",
          },
        },
        grid: {
          borderColor: "#f2f5f7",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
        stroke: {
          show: true,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Current Month"],
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          title: {
            style: {
              color: "#8c9097",
            },
          },
          labels: {
            show: true,
            style: {
              colors: "#8c9097",
              fontSize: "11px",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        fill: {
          opacity: 1,
        },
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={210} />
      );
    }
}