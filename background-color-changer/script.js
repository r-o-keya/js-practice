const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener('click',()=>{
    const color = button.getAttribute("data-color")
    document.body.style.backgroundColor = color;

    buttons.forEach((btn) => {
      const originalColor = btn.getAttribute("data-color")
      btn.style.backgroundColor = originalColor
      btn.style.color = 'white'

    })

    button.style.backgroundColor = 'white';
    button.style.color = 'black'

  })
});