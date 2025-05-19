//Прогрузка хедера и футера
document.addEventListener('DOMContentLoaded', function () {
  function loadComponent(path, targetId) {
    fetch(path)
      .then(response => {
        if (!response.ok) throw new Error(`Ошибка загрузки ${path}: ${response.status}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(targetId).innerHTML = data;
      })
      .catch(error => console.error(error));
  }

  loadComponent('header.html', 'header-container');
  loadComponent('footer.html', 'footer-container');
});