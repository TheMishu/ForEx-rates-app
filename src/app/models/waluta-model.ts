export interface WalutaModel {
    nazwa: string,
    dataOd?: Date,
    dataDo?: Date,
};

export interface WalutaDataModel {
        mid: number,
        effectiveDate: Date,
};

export interface inRates {
    no: string,
    effectiveDate: Date,
    mid: number
};

export interface WalutaInitialModel {
    rates: inRates[],
}
