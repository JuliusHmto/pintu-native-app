import { createAction } from "@reduxjs/toolkit";

export const SAVE_CRYPTO_DATA = "SAVE_CRYPTO_DATA";
export const CLEAR_CRYPTO_DATA = "CLEAR_CRYPTO_DATA";

export const SAVE_CRYPTO_PRICE = "SAVE_CRYPTO_PRICE";
export const CLEAR_CRYPTO_PRICE = "CLEAR_CRYPTO_PRICE";

export const SAVE_ERROR = "SAVE_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const saveCryptoData = createAction(SAVE_CRYPTO_DATA);
export const clearCryptoData = createAction(CLEAR_CRYPTO_DATA);

export const saveCryptoPrice = createAction(SAVE_CRYPTO_PRICE);
export const clearCryptoPrice = createAction(CLEAR_CRYPTO_PRICE);

export const saveError = createAction(SAVE_ERROR);
export const clearError = createAction(CLEAR_ERROR);