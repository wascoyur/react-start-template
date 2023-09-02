/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
    console.log(result);
    return result;
});
// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
    constructor() {
        this.set = new Set([1]);
        this.channel = new BroadcastChannel('test-broadcast-channel');
    }
}
// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
const getDataAmount = (data) => {
    switch (data.type) {
        case 'Money':
            return data.value.amount;
        default: {
            const unhandled = data.value; // здесь, возможно, нужно использовать нечто другое
            throw new Error(`unknown type: ${data.type}`);
        }
    }
};
//# sourceMappingURL=2_repair.js.map