


export const getAcceptanceTimestamp = (historyArray) => {

const acceptanceTimestamp = historyArray.filter(e => e.type === 'CUSTOMS_ACCEPTANCE');
console.log(acceptanceTimestamp.date);

return acceptanceTimestamp.date;


}