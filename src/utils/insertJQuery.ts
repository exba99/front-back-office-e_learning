export function reloadJs() {
  const div = document.createElement('div');
  div.id = 'div';
  document.body.appendChild(div);
}

export function deleteJs() {
  const result = document.getElementById('div');
  if (result) {
    result.remove();
  }
}
