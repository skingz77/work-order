import React from "react";
import { connect } from "react-redux";
import { fetchWorkOrder, fetchWorker } from "../actions";

class WorkOrder extends React.Component {
  constructor() {
    super();
    this.workGenerator = this.workGenerator.bind(this);
    this.filterWorker = this.filterWorker.bind(this);
  }
  componentDidMount() {
    this.props.fetchWorkOrder();
    this.props.fetchWorker();
  }

  filterWorker(workers) {
    let filter = this.props.filterWork;
    filter = filter.toLowerCase();
    let lowcase = workers.map(worker => {
      worker.name = worker.name.toLowerCase();
      return worker;
    });
    lowcase = lowcase.filter(worker => {
      let checker = worker.name.match(filter);
      if (checker !== null) {
        return true;
      } else {
        return false;
      }
    });

    return lowcase;
  }

  workGenerator() {
    let halfFiltered = this.filterWorker(this.props.WorkerFetch);
    let filterNumbers = halfFiltered.map(work => {
      return work.id;
    });

    let final = this.props.WorkOrderFetch.orders.filter(work => {
      let check = false;
      for (let i = 0; i < filterNumbers.length; i++) {
        if (work.workerId === filterNumbers[i]) {
          check = true;
        }
      }
      if (check) {
        return true;
      } else {
        return false;
      }
    });

    if (this.props.checked) {
      final.sort((a, b) => {
        return parseFloat(b.deadline) - parseFloat(a.deadline);
      });
    } else {
      final.sort((a, b) => {
        return parseFloat(a.deadline) - parseFloat(b.deadline);
      });
    }
    return final.map(order => {
      var myDate = new Date(order.deadline * 1000);
      let month = myDate.getMonth();
      let day = myDate.getDay();
      let year = myDate.getFullYear();
      let hour = myDate.getHours();
      let minute = myDate.getMinutes();
      let second = myDate.getSeconds();
      return (
        <div className="workOrderCard" key={order.id}>
          <div className="workOrder">
            <h2>{order.name}</h2>
            <h4>{order.description}</h4>
          </div>
          <div className="worker">
            <img
              src={this.props.WorkerFetch[order.workerId].image}
              alt="work"
            />
            <div className="workerDetails">
              <h2>{this.props.WorkerFetch[order.workerId].name}</h2>
              <h4>{this.props.WorkerFetch[order.workerId].companyName}</h4>
              <h4>{this.props.WorkerFetch[order.workerId].email}</h4>
            </div>
          </div>
          <div className="timestamp">
            <h4>
              {month}/{day}/{year} {hour}:{minute}:{second}
            </h4>
          </div>
        </div>
      );
      // console.log(response);
    });
  }

  render() {
    // console.log(this.props);

    if (this.props.WorkOrderFetch === null || this.props.WorkerFetch === null) {
      return <div className="workOrderContainer">LOADING....</div>;
    } else {
      return <div className="workOrderContainer">{this.workGenerator()}</div>;
    }
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  {
    fetchWorkOrder,
    fetchWorker
  }
)(WorkOrder);
