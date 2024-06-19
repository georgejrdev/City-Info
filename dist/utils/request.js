"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
function makeRequest(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, method = 'GET', headers = {}, body = null) {
        const options = {
            method: method,
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
        };
        if (method !== 'GET' && body) {
            options.body = JSON.stringify(body);
        }
        try {
            const response = yield fetch(url, options);
            if (!response.ok) {
                throw new Error(`Erro na requisição. Status: ${response.status}`);
            }
            return yield response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.makeRequest = makeRequest;
