declare var $: any;

export class AddCenterAlignComponent {
  constructor() {}

  // Center Align Tag
    addCenterAlignTagHTMLCode(uid) {

      $(`#cb-buttons-${uid}`).append(`
      <!-- Center Align tag -->
      <div class="tool box1 m-1"  title="Center Align">
        <button class="btn btn-light" id="add-center-align-box2-${uid}">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-text-center" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0
            1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0
            1-.5-.5z" />
          </svg>
        </button>
      </div>
      `);
    }

    addCenterAlignTagClickFunction = (uid) => {
        // Adding Center Align Tag Click Function
        $(`#add-center-align-box2-${uid}`).click(() => {
          $(`#cb-box-2-${uid}`).removeClass('text-left text-right').addClass('text-center');
        });
    }
  // Center Aligned Component
  addCenterAlignTextToolBox = (uid) => {
    $(`#cb-box-2-${uid}`)
      .removeClass('text-left text-right')
      .addClass('text-center');
  }
}
