const LIMIT_NUM = 10;

function closedByTime() {
  FormApp.getActiveForm().setAcceptingResponses(false);
}

function closedByPersons() {
  const formApp = FormApp.getActiveForm();
  if (formApp.getResponses().length >= LIMIT_NUM) {
    formApp.setAcceptingResponses(false);
  }
}
