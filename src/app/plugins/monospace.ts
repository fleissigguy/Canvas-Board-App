declare var $: any;

export class AddFontMonospaceComponent {
  constructor() {}

  addMonospaceFontToolBox = (uid) => {
    $(`#cb-box-2-${uid}`).removeClass('playfair-font kalam-font').addClass('monospace-font');
  }
}
