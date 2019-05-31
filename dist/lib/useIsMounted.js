"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.useIsMounted = () => {
    const isMounted = React.useRef(true);
    React.useEffect(() => () => isMounted.current = false, []);
    return isMounted;
};
