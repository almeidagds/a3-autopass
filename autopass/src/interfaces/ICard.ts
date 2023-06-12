export default interface ICard {
    id: number,
    cardNumber: string,
    type: string,
    clientId: number,
    balance: number,
    balanceLimit: number,
    active: boolean
    modified?: Date,
    created: Date
}