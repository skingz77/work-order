import axios from 'axios';

export const fetchWorkOrder = ()=>{
    return async dispatch =>{
        const response = await axios.get(
            "https://www.hatchways.io/api/assessment/work_orders"
        );
        dispatch({type: 'FETCH_WORK_ORDERS', payload: response.data})
    }
}

export const fetchWorker = ()=>{
    return async dispatch =>{
        const response0 = await axios.get(
            `https://www.hatchways.io/api/assessment/workers/0`
        );
        const response1 = await axios.get(
            `https://www.hatchways.io/api/assessment/workers/1`
        );
        const response2 = await axios.get(
            `https://www.hatchways.io/api/assessment/workers/2`
        );
        const response3 = await axios.get(
            `https://www.hatchways.io/api/assessment/workers/3`
        );
        const response4 = await axios.get(
            `https://www.hatchways.io/api/assessment/workers/4`
        );

        const response = [
            response0.data.worker,
            response1.data.worker,
            response2.data.worker,
            response3.data.worker,
            response4.data.worker,
        ]
        dispatch({type: 'FETCH_WORKER', payload: response})
    }
}

export const filterWorkers = (filter)=>{
    return {
        type: 'FILTER_WORKERS',
        payload: filter
    }
}

export const checked = (check) =>{
    return {
        type: 'CHECKED',
        payload: check
    }
}
