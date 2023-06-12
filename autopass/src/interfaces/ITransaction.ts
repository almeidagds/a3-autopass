export default interface ITransaction {
    value?: number,
    quantity?: number,
    modality?: string,
    payment?: string,
    balance?: number,
    limit?: number
}