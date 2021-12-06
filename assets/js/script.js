import initSearch from "./search.js";
import InitSearchBytype from "./search-by-type.js";
import initModalHelp from "./help-modal.js";
import initSearchBySpeech from "./init-search-by-speech.js";

window.onload = function init() {
  initSearch();
  InitSearchBytype();
  initModalHelp();
  initSearchBySpeech();
};
