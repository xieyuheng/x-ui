import { defineCustomElement } from 'vue'
import Dropdown from './components/dropdown/Dropdown.ce.vue'

customElements.define('x-dropdown', defineCustomElement(Dropdown as any))
