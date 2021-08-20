import initSearch from './search.js'
import InitSearchBytype from './search-by-type.js'
import initModalHelp from './help-modal.js'

window.onload = function () {
    initSearch();
    InitSearchBytype();
    initModalHelp();
}