const WorkOrderFetch = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_WORK_ORDERS':
            return action.payload;
        default:
            return state
    }
};

export default WorkOrderFetch;
