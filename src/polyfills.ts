import { Buffer } from 'buffer';
const process = require("process");

(window as any).global = window;
(window as any).global.Buffer = Buffer;
(window as any).process = process;
