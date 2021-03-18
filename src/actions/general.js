export const ON_HELP_PAGES = 'ON_HELP_PAGES';

export const onHelpPages = (showHelpButtons) => ({
  type: ON_HELP_PAGES,
  showHelpButtons,
});

export const NO_HELP_BUTTONS = 'NO_HELP_BUTTONS';

export const noHelpButtons = (showHelpButtons) => ({
  type: NO_HELP_BUTTONS,
  showHelpButtons,
});
