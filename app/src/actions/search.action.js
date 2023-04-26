export const getDataFromService = () => {
    return {
        type: 'GETDATAFROMSERVICE'
    }
}

export const updateData = (newdata) => {
    return {
        type: 'UPDATE',
        payload: newdata
    }
}