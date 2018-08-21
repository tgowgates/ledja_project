import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { smoothscroll } from 'packs/smoothscroll';

if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {"particles":{"number":{"value":72,"density":{"enable":true,"value_area":1443.0708547789707}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#ffffff"},"polygon":{"nb_sides":12},"image":{"src":"","width":100,"height":100}},"opacity":{"value":0.6573989449548644,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":9.744926547616142,"size_min":5.684540486109416,"sync":true}},"line_linked":{"enable":true,"distance":192.40944730386272,"color":"#ffffff","opacity":0.49705773886831206,"width":1.122388442605866},"move":{"enable":true,"speed":1.3,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":6734.330655635195,"rotateY":2565.4592973848366}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":523.7898019343676,"line_linked":{"opacity":0.180977608134121}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":48.72463273808071,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});;
}
