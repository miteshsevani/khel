/*
  Function to reset (reload) the page
*/

export default function resetFilters() {
  const elReset = document.querySelector("#reset");
  elReset.addEventListener('click', function() {
    location.reload();
  });
}
