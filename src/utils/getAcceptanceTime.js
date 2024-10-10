



export const getAcceptanceTimestamp = (historyArray) => {

const acceptanceTimestamp = historyArray.find(e => e.type === 'CUSTOMS_ACCEPTANCE');



return acceptanceTimestamp.date



}