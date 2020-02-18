import {anim_entete} from "./anim_entete.mjs";
import {anim_sousEntete} from "./anim_sousEntete.mjs";
import { Slider } from "./Slider.mjs";
import { config_slider } from "./config_slider.mjs";


let elmEntete = document.querySelector("header .global");
const animEntete = new anim_entete(elmEntete);
animEntete.animEntete();

let elmSousEntete = document.querySelector("header .global");
const animSousEntete = new anim_sousEntete(elmSousEntete);
animSousEntete.animSousEntete();

const elmSlider = document.querySelector('.mon-slider')
console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()
