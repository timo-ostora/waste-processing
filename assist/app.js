
setInterval(getComment, 5000);

function getComment() {
  const container = Array.prototype.slice.call(document.querySelectorAll('.comment'));
  let center = document.querySelector('.comment.center')
  let left = document.querySelector('.comment.left')
  let right = document.querySelector('.comment.right')
  center.className = 'comment';
  center.classList.add('left')
  left.className = 'comment';
  left.classList.add('right')
  right.className = 'comment';
  right.classList.add('center')
  getActiveDot(container.indexOf(right))
}

function getActiveDot(index) {
  let dots = Array.prototype.slice.call(document.querySelector('.dots').children);
  dots.forEach(dot => {
    dot.classList.remove('active')
  });
  dots[index].className = 'active'
}
