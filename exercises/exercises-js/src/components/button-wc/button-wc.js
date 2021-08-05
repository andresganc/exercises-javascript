import { Component, Host, h, Prop, State } from '@stencil/core';
// Function format for various styles
/*
function formatStyles(color: string, styles: string): string {
  return (color || '') + (styles || '');
}
*/
export class ButtonWc {
  constructor() {
    // State
    this.disabled = false;
  }
  // Call function formatStyles
  /*
  private getStyles(): string {
    return formatStyles(this.color, this.styles);
  }
  */
  render() {
    return (h(Host, null,
      h("button", { class: this.styles, disabled: this.disabled },
        h("slot", null))));
  }
  static get is() { return "button-wc"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button-wc.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-wc.css"]
  }; }
  static get properties() { return {
    "styles": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get states() { return {
    "disabled": {}
  }; }
}
/*
interface ButtonWcProps {
  bgcolor: string;
  textcolor: string;
}

export const ButtonWc: FunctionalComponent<ButtonWcProps> = ({ bgcolor, textcolor }) => (
  <button class={ bgcolor } {...textcolor}> </button>
);
*/ 
