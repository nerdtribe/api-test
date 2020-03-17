"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloBuilder = name => ({ hello: name });
exports.rootHandler = (_req, res) => {
    return res.send('API is working 🤓');
};
exports.helloHandler = (req, res) => {
    const { params } = req;
    const { name = 'World' } = params;
    const response = helloBuilder(name);
    return res.json(response);
};
//# sourceMappingURL=handlers.js.map