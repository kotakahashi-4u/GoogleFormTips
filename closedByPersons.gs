const LIMIT_NUM = 10;

function myFunction() {
  const formApp = FormApp.getActiveForm();
  if (formApp.getResponses().length >= LIMIT_NUM) {
    formApp.setAcceptingResponses(false);
  }
}
