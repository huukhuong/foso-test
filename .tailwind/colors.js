"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("tailwindcss/colors"));
const tailColors = colors_1.default;
if ('lightBlue' in tailColors)
    delete tailColors.lightBlue;
if ('warmGray' in tailColors)
    delete tailColors.warmGray;
if ('trueGray' in tailColors)
    delete tailColors.trueGray;
if ('coolGray' in tailColors)
    delete tailColors.coolGray;
if ('blueGray' in tailColors)
    delete tailColors.blueGray;
const colors = Object.assign(Object.assign({}, tailColors), { primary: '#0375F3', darkPrimary: '#25387A', background: '#F3F4F6', text: '#11315B', lightOrange: '#FF9432', darkOrange: '#C25705', inactive: '#8E8E93' });
exports.default = colors;
