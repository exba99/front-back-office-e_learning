export function reloadJs() {
  var scripts = document.getElementsByTagName('script');
  if (scripts.length > 0) {
    deleteJs();
  }
  const scriptJQuery = document.createElement('script');
  scriptJQuery.src = '/assets/js/jquery.min.js';
  scriptJQuery.async = true;
  document.body.appendChild(scriptJQuery);

  const scriptPopper = document.createElement('script');
  scriptPopper.src = '/assets/js/popper.min.js';
  scriptPopper.async = true;
  document.body.appendChild(scriptPopper);

  const scriptBootStrap = document.createElement('script');
  scriptBootStrap.src = '/assets/js/bootstrap.min.js';
  scriptBootStrap.async = true;
  document.body.appendChild(scriptBootStrap);

  const scriptSelect = document.createElement('script');
  scriptSelect.src = '/assets/js/select2.min.js';
  scriptSelect.async = true;
  document.body.appendChild(scriptSelect);

  const scriptSlick = document.createElement('script');
  scriptSlick.src = '/assets/js/slick.js';
  scriptSlick.async = true;
  document.body.appendChild(scriptSlick);

  const scriptMoment = document.createElement('script');
  scriptMoment.src = '/assets/js/moment.min.js';
  scriptMoment.async = true;
  document.body.appendChild(scriptMoment);

  const scriptDate = document.createElement('script');
  scriptDate.src = '/assets/js/daterangepicker.js';
  scriptDate.async = true;
  document.body.appendChild(scriptDate);

  const scriptSummer = document.createElement('script');
  scriptSummer.src = '/assets/js/summernote.min.js';
  scriptSummer.async = true;
  document.body.appendChild(scriptSummer);

  const scriptMetis = document.createElement('script');
  scriptMetis.src = '/assets/js/metisMenu.min.js';
  scriptMetis.async = true;
  document.body.appendChild(scriptMetis);

  const scriptCustomJs = document.createElement('script');
  scriptCustomJs.src = '/assets/js/custom.js';
  scriptCustomJs.async = true;
  document.body.appendChild(scriptCustomJs);
}

export function deleteJs() {
  const scriptJQuery = document.createElement('script');
  scriptJQuery.src = '/assets/js/jquery.min.js';
  document.body.appendChild(scriptJQuery);
  document.body.removeChild(scriptJQuery);

  const scriptPopper = document.createElement('script');
  scriptPopper.src = '/assets/js/popper.min.js';
  document.body.appendChild(scriptPopper);
  document.body.removeChild(scriptPopper);

  const scriptBootStrap = document.createElement('script');
  scriptBootStrap.src = '/assets/js/bootstrap.min.js';
  document.body.appendChild(scriptBootStrap);
  document.body.removeChild(scriptBootStrap);

  const scriptSelect = document.createElement('script');
  scriptSelect.src = '/assets/js/select2.min.js';
  document.body.appendChild(scriptSelect);
  document.body.removeChild(scriptSelect);

  const scriptSlick = document.createElement('script');
  scriptSlick.src = '/assets/js/slick.js';
  document.body.appendChild(scriptSlick);
  document.body.removeChild(scriptSlick);

  const scriptMoment = document.createElement('script');
  scriptMoment.src = '/assets/js/moment.min.js';
  document.body.appendChild(scriptMoment);
  document.body.removeChild(scriptMoment);

  const scriptDate = document.createElement('script');
  scriptDate.src = '/assets/js/daterangepicker.js';
  document.body.appendChild(scriptDate);
  document.body.removeChild(scriptDate);

  const scriptSummer = document.createElement('script');
  scriptSummer.src = '/assets/js/summernote.min.js';
  document.body.appendChild(scriptSummer);
  document.body.removeChild(scriptSummer);

  const scriptMetis = document.createElement('script');
  scriptMetis.src = '/assets/js/metisMenu.min.js';
  document.body.appendChild(scriptMetis);
  document.body.removeChild(scriptMetis);

  const scriptCustomJs = document.createElement('script');
  scriptCustomJs.src = '/assets/js/custom.js';
  document.body.appendChild(scriptCustomJs);
  document.body.removeChild(scriptCustomJs);
}
