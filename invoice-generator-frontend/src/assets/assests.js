// src/assets/assets.js
import websiteLogo from './website-logo.png';
import template1 from './template1.png';
import template2 from './template2.png';
import template3 from './template3.png';
import template4 from './template4.png';
import template5 from './template5.png';

export const assets = {
  websiteLogo,
  template1,
  template2,
  template3,
  template4,
  template5,
};

export const templates = [
  { id: "template1", label: "Template 1", image: assets.template1 },
  { id: "template2", label: "Template 2", image: assets.template2 },
  { id: "template3", label: "Template 3", image: assets.template3 },
  { id: "template4", label: "Template 4", image: assets.template4 },
  { id: "template5", label: "Template 5", image: assets.template5 },
];
